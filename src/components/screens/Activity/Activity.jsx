import React from 'react';
import Button from '../../Button/Button';
import Viewer from '../../Viewer/Viewer';
import useRequest from '../../../hooks/useRequest';

const periods = Object.freeze({
  day: 'day',
  week: 'week',
  month: 'month',
});

function Activity() {
  const [period, setPeriod] = React.useState(periods.day);
  const { isLoading, response } = useRequest({ route: 'test/people', query: { period } });

  return (
    <>
      <Button
        value="Day"
        onClick={() => setPeriod(periods.day)}
        selected={periods.day === period}
      />
      <Button
        value="This Week"
        onClick={() => setPeriod(periods.week)}
        selected={periods.week === period}
      />
      <Viewer
        className="people-viewer"
        toView={[
          { value: 'Client', key: 'client' },
          { value: 'Matter', key: 'matter' },
          { value: 'Description', key: 'description' },
          { value: 'Type', key: 'type' },
          { value: 'Time', key: 'time' },
        ]}
        data={isLoading ? [] : response.data.people}
        widths={[13, 13, 48, 13, 13]}
      />
    </>
  );
}

export default Activity;
