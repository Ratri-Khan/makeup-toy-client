import { useContext, useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContextProvider/AuthProviders';


const ShopCategory = () => {
    const [tabtext, setTabText] = useState("Lipstic");
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
  fetch(
    `https://toy-shop-server-eta.vercel.app/categories?subCategory=${tabtext}`
  )
    .then((res) => res.json())
    .then((data) => setToys(data));
  }, [tabtext]);

    console.log(toys);
  console.log(tabtext)

  const handleViewDetail = (id) => {
    console.log(id)
    Swal.fire("You have to login first");
    navigate('/login');
}
  return (
    <div className="my-8">
      <p className="text-5xl font-serif mb-6 text-center py-8">
        Our Product Category
      </p>

      <Tabs className="bg-fuchsia-200">
        <TabList>
          <Tab onClick={() => setTabText("Lipstic")}>Lipstic</Tab>
          <Tab onClick={() => setTabText("NailPolish")}>
            NailPolish
          </Tab>
          <Tab onClick={() => setTabText("Eye Shadow")}>Eye Shadow</Tab>
        </TabList>

        <TabPanel className="grid grid-cols-3 gap-4">
          <div className="grid grid-cols-3 gap-4">
            {toys.map((toy) => (
              <div
                key={toy._id}
                className="card w-96 mx-auto gap-4 bg-base-100 shadow-pink-500 shadow-xl "
              >
                <figure>
                  <img
                    src={toy.photoUrl}
                    className="w-60 h-60 object-cover"
                    alt={toy.toyName}
                  />
                </figure>
                <div className="card-body text-center">
                  <h2 className="card-title text-center">ToyName: {toy.toyName}</h2>
                  <h2 className="card-title">ToyPrice: ${toy.price}</h2>
                  <h2 className="card-title">ToyRating: {toy.rating}</h2>
                  <div className="card-actions justify-star">
                    {user ? (
                      <>
                        <button className="btn bg-fuchsia-600 text-white">
                          <Link to={`/deatils/${toy._id}`}>View Detail</Link>
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <button
                          onClick={() => handleViewDetail(`${toy._id}`)}
                          className="btn bg-fuchsia-600 text-white"
                        >
                          View Detail
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div  className="grid grid-cols-3 gap-4">
            {toys.map((toy) => (
              <div
                key={toy._id}
                className="card w-96 mx-auto bg-base-100 shadow-xl  shadow-pink-500"
              >
                <figure>
                  <img
                    src={toy.photoUrl}
                    className="w-60 h-60 object-cover"
                    alt={toy.toyName}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">ToyName: {toy.toyName}</h2>
                  <h2 className="card-title">ToyPrice: ${toy.price}</h2>
                  <h2 className="card-title">ToyRating: {toy.rating}</h2>
                  <div className="card-actions justify-star">
                    {user ? (
                      <>
                        <button className="btn bg-fuchsia-600 text-white">
                          <Link to={`/deatils/${toy._id}`}>View Detail</Link>
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <button
                          onClick={() => handleViewDetail(`${toy._id}`)}
                          className="btn bg-fuchsia-600 text-white"
                        >
                          View Detail
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {toys.map((toy) => (
              <div key={toy._id} className="card w-96 mx-auto bg-base-100 shadow-xl  shadow-pink-500">
                <figure>
                  <img
                    src={toy.photoUrl}
                    className="w-60 h-60 object-cover"
                    alt={toy.toyName}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">ToyName: {toy.toyName}</h2>
                  <h2 className="card-title">ToyPrice: ${toy.price}</h2>
                  <h2 className="card-title">ToyRating: {toy.rating}</h2>
                  <div className="card-actions justify-star">
                    {user ? (
                      <>
                        <button className="btn bg-fuchsia-600 text-white">
                          <Link to={`/deatils/${toy._id}`}>View Detail</Link>
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <button
                          onClick={() => handleViewDetail(`${toy._id}`)}
                          className="btn bg-fuchsia-600 text-white"
                        >
                          View Detail
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ShopCategory;
// **********************************************
