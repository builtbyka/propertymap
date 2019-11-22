import React, { useState } from 'react';
import useStyles from './style';

const Filter = () => {
  const classes = useStyles();
  const [priceFrom, setPriceFrom] = useState(1000000);
  const [postcode, setPostcode] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const sortOrders = ['Highest First', 'Lowest First'];
  const postCodes = ['M4', 'M3'];

  return (
    <div className={classes.container}>
      <form noValidate className={classes.form}>
        <p className="mb-1">Refine your results</p>
        <div className="columns text-center">
          <div className="column col-4 col-xs-12">
            <div className="form-group">
              <div className="col-3 col-sm-12">
                <label className="form-label" htmlFor="price-from">
                      Price from
                </label>
              </div>
              <div className="col-9 col-sm-12">
                <input
                  className="form-input"
                  min="0"
                  max="10000000"
                  type="number"
                  id="price-from"
                  placeholder="£1,000,000"
                  value={priceFrom}
                  onChange={(event) => setPriceFrom(Number(event.target.value))}
                />
              </div>
            </div>
          </div>
          <div className="column col-4 col-xs-12">
            <div className="form-group">
              <div className="col-3 col-sm-12">
                <label className="form-label" htmlFor="postcode">
                      Postcode
                </label>
              </div>
              <div className="col-9 col-sm-12">
                <select
                  className="form-select"
                  id="postcode"
                  value={postcode}
                  onChange={(event) => setPostcode(event.target.value)}
                >
                  {postCodes.map((pc) => (
                    <option key={pc} value={pc.replace(' ', '').toLowerCase()}>
                      {pc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="column col-4 col-xs-12">
            <div className="form-group">
              <div className="col-3 col-sm-12">
                <label className="form-label" htmlFor="sortorder">
                      Sort Order
                </label>
              </div>
              <div className="col-9 col-sm-12">
                <select
                  className="form-select"
                  id="sortorder"
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value)}
                >
                  {sortOrders.map((order) => (
                    <option key={order} value={order.replace(' ', '').toLowerCase()}>
                      {order}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
};


export default Filter;
