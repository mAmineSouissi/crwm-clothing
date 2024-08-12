import { Link as ReactRouterLink } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast, // Import useToast
} from "@chakra-ui/react";

import {
  createUserDocumetFromAuth,
  signInAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const toast = useToast(); // Initialize toast

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const googleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumetFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await signInAuth(email, password);
      console.log(res);
      toast({
        title: "Logged in successfully",
        status: "success",
        isClosable: true,
      });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential"){
        toast({
          title: "Invalid email or password",
          status: "error",
          isClosable: true,
        });
        console.error("Error logging in user", error);
        return;
      }
    }
  }; 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input name="email" value={email} type="email" onChange={handleChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input name="password" value={password} type="password" onChange={handleChange} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={"blue.400"}>
                    <Link as={ReactRouterLink} to="/sign-in/forgot-password">
                      Forgot password?
                    </Link>
                  </Text>
                </Stack>
                <Button
                  type="submit"
                  bg={"gray.400"}
                  color={"white"} 
                  _hover={{
                    bg: "gray.500",
                  }}
                >
                  Sign in
                </Button>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={googleUser}
                >
                  Sign in with Google
                </Button>
              </Stack>
            </form>
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have an account?{" "}
                <Link as={ReactRouterLink} to="/sign-up" color={"blue.400"}>
                  Create an account
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignIn;
