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
const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();
    const handleClick = () => {
        setShow(!show);
    };
    const postDetails = (pics) => {
        setLoading(true);
        if (pics === undefined) {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "dhjiizh8i");
            fetch("https://api.cloudinary.com/v1_1/dhjiizh8i/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                    console.log(data.url.toString());
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        } else {
            toast({
                title: "Please select an Image",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
        }
    };
    const submitHandler = async () => {
        setLoading(true);
        if (!name || !password || !email || !confirmPassword) {
            toast({
                title: "Please fill all the fields",
                status: "warning",
                duration: 5000,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
        if (password !== confirmPassword) {
            toast({
                title: "Please fill  the same password",
                status: "warning",
                duration: 5000,
                position: "bottom",
            });
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/api/user",
                { name, email, password, pic },
                config,
            );
            toast({
                title: "Registration is Sucessful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            navigate("/dashboard")
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: "true",
                position: "bottom"

            })
            setLoading(false)
        }
    };
    return (
        <VStack spacing="5px">
            <FormControl id="name" isRequired>
                <FormLabel> Name</FormLabel>
                <Input
                    placeholder="Enter Your name"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
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
            <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Confirm Your Password"
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                    />
                    <InputRightElement widht="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="pic">
                <FormLabel> Upload your Picture</FormLabel>

                <Input
                    type="file"
                    p={0.5}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>
            <Button
                colorScheme="red"
                widht="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
                isLoading={loading}
                variant="solid"
            >
                Sign Up
            </Button>
        </VStack>
    );
};

export default Signup;