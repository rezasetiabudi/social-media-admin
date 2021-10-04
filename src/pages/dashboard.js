import React from 'react'

import {
    Flex,
    Heading,
    Text,
    Icon,
    Link,
} from '@chakra-ui/react'

import {
    FiHome,
    FiImage
} from "react-icons/fi"

import Posts from "../components/Posts";


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

                {/* Sidebar route link */}
                <Flex
                    w={["100%", "100%", "15%", "20%", "20%"]}
                    flexDir="column"
                    alignItems="center"
                    backgroundColor="#020202"
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
                                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                    <Link display={["none", "none", "flex", "flex", "flex"]}>
                                        <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                                    </Link>
                                    <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                        <Text className="active">Home</Text>
                                    </Link>
                                </Flex>
                                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                    <Link display={["none", "none", "flex", "flex", "flex"]}>
                                        <Icon as={FiImage} fontSize="2xl" /></Link>
                                    <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                        <Text>Photos</Text>
                                    </Link>
                                </Flex>
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
                        <Posts />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
