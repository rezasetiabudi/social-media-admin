import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import {
    Flex,
    Heading,
    Text,
    Icon,
    Link as CLink,
} from '@chakra-ui/react'

import {
    FiHome,
    FiImage,
    FiMessageSquare
} from "react-icons/fi"

import UserList from "../components/UserList";
import PostList from "../components/PostList";


export default function Dashboard() {
    return (
        <>
            <Flex
                h={[null, null, "100vh"]}
                maxW="2000px"
                flexDir={["column", "column", "row"]}
                overflow="hidden"
                bg="silver"
            >
                <BrowserRouter>
                    {/* Sidebar route link */}
                    <Flex
                        w={["100%", "100%", "15%", "20%", "20%"]}
                        flexDir="column"
                        alignItems="center"
                        backgroundColor="#242952"
                        color="#fff"
                    >
                        <Flex
                            flexDir="column"
                            h={[null, null, "100vh"]}
                            justifyContent="space-between"
                        >
                            <Flex
                                flexDir="column"
                                as="nav"
                            >
                                <Heading
                                    mt={50}
                                    mb={[25, 50, 100]}
                                    fontSize={["4xl", "4xl", "2xl", "3xl", "4xl",]}
                                    alignSelf="center"
                                    letterSpacing="tight"
                                >
                                    Social Media Admin Dashboard
                                </Heading>
                                <Flex
                                    flexDir={["row", "row", "column", "column", "column"]}
                                    align={["center", "center", "center", "flex-start", "flex-start"]}
                                    wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                                    justifyContent="center"
                                    px="25%"
                                >

                                    <Link to='/' mb>
                                        <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                            <CLink display={["none", "none", "flex", "flex", "flex"]}>
                                                <Icon as={FiHome} fontSize="2xl" />
                                            </CLink>
                                                <CLink _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                                    <Text>Home</Text>
                                                </CLink>
                                        </Flex>
                                    </Link>

                                    <Link to='/postlist'>
                                        <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                            <CLink display={["none", "none", "flex", "flex", "flex"]}>
                                                <Icon as={FiMessageSquare} fontSize="2xl" />
                                            </CLink>
                                                <CLink _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                                    <Text>Posts</Text>
                                                </CLink>
                                        </Flex>
                                    </Link>

                                    <Link to='/albums'>
                                        <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                            <CLink display={["none", "none", "flex", "flex", "flex"]}>
                                                <Icon as={FiImage} fontSize="2xl" />
                                            </CLink>
                                                <CLink _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                                    <Text>Albums</Text>
                                                </CLink>    
                                        </Flex>
                                    </Link>

                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    
                    {/* Main Content render component from route*/}
                    <Flex
                        w={["100%", "100%", "85%", "80%", "80%"]}
                        p="3%"
                        flexDir="column"
                        overflow="auto"
                        minH="100vh"
                        >
                        <Flex
                            w="full"
                            direction="column"
                        >
                            <Switch>
                                <Route path="/" exact component={UserList} />
                                <Route path="/postlist" exact component={PostList} />
                            </Switch>
                        </Flex>
                    </Flex>
                </BrowserRouter>
            </Flex>
        </>
    )
}
