import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
import { ItemType } from './Items';
import { useParams } from 'react-router-dom';
import Event from './Event';
export interface EventDataType {
  _id: string;
  event: string;
  location: string;
  custodian: string;
  item: string;
  timestamp: string;
}
const ItemDetails = () => {
  let { id } = useParams();
  const [data, setData] = useState<ItemType>();
  const [event, setEvent] = useState<EventDataType[]>();
  useEffect(() => {
    axios.get(`http://164.92.234.49/api/supply/${id}`).then((res) => {
      console.log(res);

      setData(res.data.data.item);
    });
  }, [id]);
  useEffect(() => {
    axios.get(`http://164.92.234.49/api/item/${id}/event`).then((res) => {
      console.log(res);

      setEvent(res.data.data.item);
    });
  }, [id]);
  return (
    <div className='flex  flex-col  pt-6 pb-6 pl-12 pr-12 sm:pl-24 sm:pr-24 sm:text-xl'>
      <p className='font-bold text-xl mb-4'>Item</p>
      <div>
        {data !== undefined && <Item displayButton={false} item={data} />}
      </div>
      <p className='font-bold text-xl mb-4'>Event Details</p>
      <div className='grid gap-x-8 gap-y-4  grid-cols-1 sm:grid-cols-2'>
        {event?.map((data) => (
          <Event key={data._id} event={data} />
        ))}
      </div>
    </div>
  );
};

export default ItemDetails;
