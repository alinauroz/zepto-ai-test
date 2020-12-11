import React from 'react';
import uuid from 'react-uuid';
import Button from '../../Button/Button';
import Viewer from '../../Viewer/Viewer';
import useRequest from '../../../hooks/useRequest';
import {
  toView, widths, periods, route, viewerClass, values,
} from '../../../res/Activity';

function Activity() {
  const [period, setPeriod] = React.useState(periods.day);
  const { isLoading, response } = useRequest({ route, query: { period } });

  return (
    <>
      <div>
        {
            Object.keys(periods).map((key) => (
              <Button
                value={values[key]}
                onClick={() => setPeriod(periods[key])}
                selected={periods[key] === period}
                key={uuid()}
              />
            ))
        }
      </div>
      <Viewer
        className={viewerClass}
        toView={toView}
        data={isLoading ? [] : response.data.people}
        widths={widths}
      />
    </>
  );
}

export default Activity;
