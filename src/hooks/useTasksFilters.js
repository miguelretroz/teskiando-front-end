import { useEffect, useState } from 'react';

export default (tasks) => {
  const [tasksFilter, setTasksFilter] = useState({
    status: new Set(),
    title: '',
  });
  const [tasksFiltered, setTasksFiltered] = useState([]);

  useEffect(() => {
    const filtered = tasks?.filter(({ status, title }) => {
      let flag = true;

      if (tasksFilter.status.size && !tasksFilter.status.has(status)) {
        flag = false;
      }
      if (tasksFilter.title.length) {
        const regex = new RegExp(`^${tasksFilter.title}`, 'i');
        if (!regex.test(title)) flag = false;
      }

      return flag;
    });

    setTasksFiltered(filtered || {});
  }, [tasks, tasksFilter]);

  const handleChangeFilter = ({ target }) => {
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
