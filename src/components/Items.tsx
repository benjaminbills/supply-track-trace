import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
export interface ItemType {
  _id: string;
  name: string;
  category: string;
  description: string;
  manufacturer: string;
  cost: number;
  dateAdded: string;
  color: string;
}
const Items = () => {
  useEffect(() => {
    axios.get('http://localhost:5000/api/supply/').then((res) => {
      console.log(res);

      setData(res.data.data.items);
    });
  }, []);

  const [data, setData] = useState<ItemType[]>([]);
  console.log(data);

  return (
    <div className=' p-6'>
      <p className='font-bold text-xl mb-4'>Items</p>
      <div className='grid gap-x-8 gap-y-4  grid-cols-1 sm:grid-cols-2 '>
        {data.map((item) => (
          <div key={item._id}>
            <Item item={item} displayButton={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
