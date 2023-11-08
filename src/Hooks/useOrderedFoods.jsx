import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import useAuth from "../utilities/useAuth";

const useOrderedFoods = () => {
  const { user } = useAuth();
  const [orderedFoods, setOrderedFoods] = useState([]);
  console.log(user?.email);
  useEffect(() => {
    axiosInstance
      .get(`/orders?customerEmail=${user?.email}`)
      .then((res) => setOrderedFoods(res.data));
  }, [user]);
  return orderedFoods;
};

export default useOrderedFoods;
