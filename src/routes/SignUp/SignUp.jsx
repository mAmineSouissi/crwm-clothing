import { Link as ReactRouterLink } from "react-router-dom";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

const defaultFormFields = {
  email: '',
  password: '',
  confirmPassword: '',
  displayName: '',
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword, displayName } = formFields;
    console.log(formFields);
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
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={()=>{}} action="">
            <FormControl isRequired>
              <FormLabel>User name</FormLabel>
              <Input name="displayName" value={displayName} onChange={handleChange} placeholder="User name" width={"400px"} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input name="email" value={email} type="email" onChange={handleChange} placeholder="Email address" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input name="password" value={password} type="password" onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Confirme password</FormLabel>
              <Input name="confirmPassword" value={confirmPassword} type="password" onChange={handleChange} />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link as={ReactRouterLink} to="/sign-in" color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;
