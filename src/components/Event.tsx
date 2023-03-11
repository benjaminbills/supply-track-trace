import moment from 'moment';
import { EventDataType } from './ItemDetails';

type Props = {
  event: EventDataType;
};
const Event = ({ event }: Props) => {
  return (
    <div className=' bg-white relative rounded border-gray-800 border-4 mb-4 '>
      <div>
        <div className='m-2'>
          <p>Location: {event.location}</p>
          <p>Custodian: {event.custodian}</p>
          <p>{moment(event.timestamp).format('LLLL')}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
