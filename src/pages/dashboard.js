import React, { useState } from 'react'
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
import AlbumList from '../components/AlbumList';

export default function Dashboard() {

    const [isActive, setActive] = useState("account");
    
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
                                        <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} onClick={()=>setActive("account")}>
                                            <CLink display={["none", "none", "flex", "flex", "flex"]}>
                                                <Icon as={FiHome} fontSize="2xl" className={isActive === "account"? "active-icon" : ""}/>
                                            </CLink>
                                                <CLink _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                                    <Text className={isActive === "account"? "active" : ""} >Account</Text>
                                                </CLink>
                                        </Flex>
                                    </Link>

                                    <Link to='/postlists'>
                                        <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} onClick={()=>setActive("posts")}>
                                            <CLink display={["none", "none", "flex", "flex", "flex"]}>
                                                <Icon as={FiMessageSquare} fontSize="2xl" className={isActive === "posts"? "active-icon" : ""}/>
                                            </CLink>
                                                <CLink _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                                    <Text className={isActive === "posts"? "active" : ""}>Posts</Text>
                                                </CLink>
                                        </Flex>
                                    </Link>

                                    <Link to='/albums'>
                                        <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} onClick={()=>setActive("albums")}>
                                            <CLink display={["none", "none", "flex", "flex", "flex"]}>
                                                <Icon as={FiImage} fontSize="2xl" className={isActive === "albums"? "active-icon" : ""}/>
                                            </CLink>
                                                <CLink _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                                    <Text className={isActive === "albums"? "active" : ""}>Albums</Text>
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
                        p="2%"
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
                                <Route path="/postlists" exact component={PostList} />
                                <Route path="/albums" exact component={AlbumList} />
                            </Switch>
                        </Flex>
                    </Flex>
                </BrowserRouter>
            </Flex>
        </>
    )
}
