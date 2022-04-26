// import React from 'react'

// export const Login = () => {
//     let btnStyle1 = {
//         backgroundColor: "#dd4b39"
//     }
//     return (
//         <div>
//             <section class="vh-100" style={{ backgroundColor: "#508bfc" }}>
//                 <div class="container py-5 h-100">
//                     <div class="row d-flex justify-content-center align-items-center h-100">
//                         <div class="col-12 col-md-8 col-lg-6 col-xl-5">
//                             <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
//                                 <div class="card-body p-5 text-center">

//                                     <h3 class="mb-5">Sign in</h3>

//                                     <div class="form-outline mb-4">
//                                         <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
//                                         <label class="form-label" for="typeEmailX-2">Email</label>
//                                     </div>

//                                     <div class="form-outline mb-4">
//                                         <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
//                                         <label class="form-label" for="typePasswordX-2">Password</label>
//                                     </div>

//                                     <div class="form-check d-flex justify-content-start mb-4">
//                                         <input
//                                             class="form-check-input"
//                                             type="checkbox"
//                                             value=""
//                                             id="form1Example3"
//                                         />
//                                         <label class="form-check-label" for="form1Example3"> Remember password </label>
//                                     </div>

//                                     <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

//                                     <hr class="my-4" />

//                                     <button class="btn btn-lg btn-block btn-primary" style={btnStyle1} type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }
import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100% "
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text  fontFamily="Work sans" color="black">
          Guest House Management App
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
