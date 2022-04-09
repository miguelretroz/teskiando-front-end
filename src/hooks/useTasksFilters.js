import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

const INITIAL_TASKS_FILTER = {
  status: new Set(),
  title: '',
  dateStart: '',
  dateEnd: '',
};

export default (tasks) => {
  const [tasksFilter, setTasksFilter] = useState(INITIAL_TASKS_FILTER);
  const [tasksFiltered, setTasksFiltered] = useState([]);

  useEffect(() => {
    const filtered = tasks?.filter(({ status, title, createdAt }) => {
      let flag = true;

      if (tasksFilter.status.size && !tasksFilter.status.has(status)) flag = false;

      if (tasksFilter.title.length) {
        const regex = new RegExp(`^${tasksFilter.title}`, 'i');
        if (!regex.test(title)) flag = false;
      }

      if ((tasksFilter.dateStart
          || tasksFilter.dateEnd)
          && !dayjs(createdAt)
            .isBetween(
              dayjs(tasksFilter.dateStart || new Date('2000-01-01')).subtract(1, 'day'),
              dayjs(tasksFilter.dateEnd || new Date().toDateString()).add(1, 'day'),
            )) flag = false;

      return flag;
    });

    setTasksFiltered(filtered || {});
  }, [tasks, tasksFilter]);

  const handleChangeFilter = ({ target }, clear) => {
    if (clear) return setTasksFilter(INITIAL_TASKS_FILTER);

    const { name, type, checked, value } = target;
    const copyTasksFilter = { ...tasksFilter };

    if (type === 'checkbox') {
      if (checked) copyTasksFilter.status.add(name);
      else copyTasksFilter.status.delete(name);

      setTasksFilter(copyTasksFilter);
    } else {
      copyTasksFilter[name] = value;
      setTasksFilter(copyTasksFilter);
    }
  };

  return {
    tasksFiltered,
    tasksFilter,
    handleChangeFilter,
  };
};
