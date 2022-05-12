import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();
  const handleClick = () => {
    setShow(!show);
  };
  const submitHandler = async () => {
    setLoading(true);
    if (!password || !email) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      // console.log({ email, password });
      const { data } = await axios.post(
        "http://localhost:5001/api/user/login",
        JSON.stringify({ email: email, password: password }),
        config,
      );
      toast({
        title: "Login is Sucessful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      // console.log("Hii guys")
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: "true",
        position: "bottom",
      });
      setLoading(false);
    }
  };
  return (
    <VStack spacing="5px">
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel> Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <InputRightElement widht="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="red"
        widht="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
        variant="solid"
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
