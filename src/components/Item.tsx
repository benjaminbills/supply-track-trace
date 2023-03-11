import { useNavigate } from 'react-router-dom';
import { ItemType } from './Items';

type Props = {
  item: ItemType;
  displayButton: boolean;
};
const Item = ({ item, displayButton }: Props) => {
  const navigate = useNavigate();
  return (
    <div className='bg-white relative rounded border-gray-800 border-4 mb-4 '>
      <div className='flex justify-between'>
        <div className='m-2'>
          <p>{item.name}</p>
          <p>cost:{item.cost}</p>
          <p>Manufacturer:{item.manufacturer}</p>
          <p>Category: {item.category}</p>
          <p>Color:{item.color}</p>
          <p>Description: {item.description}</p>
        </div>
        {displayButton && (
          <button
            onClick={() => navigate(`/${item._id}`)}
            className='text-white bg-gray-800 p-4'
          >
            View
          </button>
        )}
      </div>
    </div>
  );
};

export default Item;
