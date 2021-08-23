import React from 'react';
import { Link } from 'react-router-dom';
import maleAvatar from '../../img/male_avatar.svg';
import femaleAvatar from '../../img/female_avatar.svg';
import otherAvatar from '../../img/other_avatar.svg';

const Work = () => {
  return (
    <section className='work'>
      <div className='grid-2'>
        <div className='grid-content'>
          <div>
            <h1>What we do to help our client shop more faster.</h1>
          </div>
          <div className='card'>
            <div>
              <div className='card-img'>
                <img src={maleAvatar} alt='Our Work' />
              </div>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus expedita repudiandae totam omnis vel sequi dolorem
                molestias eveniet, quibusdam facere commodi, nisi rerum vitae
                officia. Cumque tempore error eum nesciunt?
              </p>
              <Link to='#'>
                Learn more{' '}
                <span>
                  <i class='far fa-arrow-right'></i>
                </span>{' '}
              </Link>
            </div>
          </div>
        </div>
        <div className='grid-content'>
          <div className='card'>
            <div>
              <div className='card-img'>
                <img src={femaleAvatar} alt='Our Work' />
              </div>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus expedita repudiandae totam omnis vel sequi dolorem
                molestias eveniet, quibusdam facere commodi, nisi rerum vitae
                officia. Cumque tempore error eum nesciunt?
              </p>
              <Link to='#'>
                Learn more
                <span>
                  <i class='far fa-arrow-right'></i>
                </span>
              </Link>
            </div>
          </div>
          <div className='card'>
            <div>
              <div className='card-img'>
                <img src={otherAvatar} alt='Our Work' />
              </div>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus expedita repudiandae totam omnis vel sequi dolorem
                molestias eveniet, quibusdam facere commodi, nisi rerum vitae
                officia. Cumque tempore error eum nesciunt?
              </p>
              <Link to='#'>
                Learn more{' '}
                <span>
                  <i class='far fa-arrow-right'></i>
                </span>{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
