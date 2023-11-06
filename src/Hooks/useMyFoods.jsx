import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import useAuth from "../utilities/useAuth";
const useMyFoods = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState(null);
  useEffect(() => {
    axiosInstance.get(`/foods?userEmail=${user?.email}`).then((res) => {
      setFoods(res.data);
    });
  }, [user]);

  return foods;
};

export default useMyFoods;
