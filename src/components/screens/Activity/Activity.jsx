import React from 'react';
import uuid from 'react-uuid';
import Button from '../../Button/Button';
import Viewer from '../../Viewer/Viewer';
import useRequest from '../../../hooks/useRequest';
import LoadingBar from '../../LoadingBar/LoadingBar';
import {
  toView, widths, periods, route, viewerClass, values,
} from '../../../res/Activity';
import { unknownError } from '../../../res/errors';
import './Activity.css';

function Activity() {
  const [period, setPeriod] = React.useState(periods.day);
  const { isLoading, response, error } = useRequest({ route, query: { period } });

  return (
    <div>
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
      {
        (() => {
          if (isLoading) return <LoadingBar title="Loading ..." />;
          if (error) {
            return (
              <p className="error-message">
                {error.message ? error.message : unknownError}
              </p>
            );
          }
          if (response.data) {
            return (
              <Viewer
                className={viewerClass}
                toView={toView}
                data={isLoading ? [] : response.data.people}
                widths={widths}
              />
            );
          }
          return null;
        })()
      }
    </div>
  );
}

export default Activity;
