import { useState, useEffect } from "react";
import axios from "lib/http";
import { toast } from "react-toastify";

const useAxios = ({
  url,
  method = "get",
  manual = false,
  showToast = false,
  toastMessage = "",
}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const errorToast = (message) =>
    toast(message, {
      className: "toast-container toast-container--error",
      bodyClassName: "toast-body",
      hideProgressBar: true,
      autoClose: false,
      position: "top-center",
      autoClose: 10000,
    });

  const successToast = (message) =>
    toast(message, {
      className: "toast-container toast-container--success",
      bodyClassName: "toast-body",
      hideProgressBar: true,
      autoClose: 10000,
      position: "top-center",
    });

  useEffect(() => {
    if (method === "get" && !manual) {
      execute();
    }
  }, []);

  useEffect(() => {
    if (response) {
      if (showToast) {
        successToast(toastMessage || "SUCCESS!");
      }
    }
  }, [response, error]);

  const init = () => {
    setResponse(null);
    setError(null);
    setIsLoading(false);
  };

  const execute = (
    args = {
      data: {},
      params: {},
      options: {},
      slug: "",
    }
  ) => {
    init();
    setIsLoading(true);
    const { data, params, options, slug } = args;
    
    axios({
      url: slug ? `${url}/${slug}` : url,
      method: method,
      params: params,
      data: data,
      ...options,
    })
      .then((response) => {
        if (response?.data?.status === "SUCCESS") {
          if (response?.data?.data) {
            setResponse(response?.data?.data);
          } else {
            setResponse("SUCCESS");
          }
        }
        return response;
      })
      .catch((err) => {
        if (err.response) {
          errorToast(err.response.data);
          console.log(err.response);
        }
        return err;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    response,
    error,
    isLoading,
    execute,
  };
};

export default useAxios;
