import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/layouts/DefaultLayout";
import styles from "../styles/Home.module.css";
import HAbout from "../components/sections/HAbout";
import HEvents from "../components/sections/HEvents";

const Home: NextPage = () => {
    return (
        <DefaultLayout>
            <>
                <div className="w-full bg-red-500 mt-5 text-black">THIS IS AN ELMO SONG</div>

                <div>
                    <HEvents />
                </div>

                <div>
                    <HAbout />
                </div>
            </>
        </DefaultLayout>
    );
};

export default Home;
