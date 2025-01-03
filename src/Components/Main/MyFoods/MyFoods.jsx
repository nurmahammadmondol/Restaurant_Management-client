import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContent } from '../../AuthProvider/AuthProvider';

const MyFoods = () => {
  const { User } = useContext(AuthContent);

  const LoaderAllData = useLoaderData();
  const [Data, setData] = useState(LoaderAllData);

  const myAddData = Data.filter(data => data?.UserEmail == User?.email);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-16">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-lg">
              <th>Serial No</th>
              <th>Food Name</th>
              <th>Food Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {myAddData.map((myData, inx) => (
              <tr>
                <td>{inx + 1}</td>
                <td className="flex items-center gap-2">
                  <img
                    className="w-10 border rounded-full"
                    src={myData.FoodImage}
                    alt=""
                  />
                  {myData.FoodName}
                </td>
                <td>{myData.FoodCategory}</td>
                <td>{myData.Price}</td>
                <td>{myData.Quantity}</td>
                <td>
                  <button className="btn  text-orange-500 text-lg bg-orange-50">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFoods;
