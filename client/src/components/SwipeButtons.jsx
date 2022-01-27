import React from 'react';
import { CgClose } from 'react-icons/cg';
import { FaStar } from 'react-icons/fa';

const SwipeButtons = () => {
  return (
      <div className='swipe-buttons'>
            <button>
                <CgClose size='30px' color='red' />
            </button>
            <button>
                <FaStar size='30px' color='#E9C46A' /> 
            </button>
      </div>
  );
};

export default SwipeButtons;
