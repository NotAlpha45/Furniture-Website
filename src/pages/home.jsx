import React from 'react'
import SubCategoryComponent from '../components/sub-category-component'
import MainCategoryComponent from '../components/main-category-component'
import FurnitureContainer from '../components/furniture-container'
import "./home.css"

export default function Home() {


    return (
        <>
            <div className='container'>
                <div className='desktop1'>
                    <div className='frame1'>
                        <div className='frame2'>
                            <span className='text'>
                                <span>Hatil</span>
                            </span>
                        </div>
                        <img
                            alt="image1589"
                            src="/image1589-syw-200h.png"
                            className='image1'
                        />
                        <div className='frame15'>
                            <span className='text02'>
                                <span>Sign in</span>
                            </span>
                        </div>
                    </div>
                    <img
                        alt="Line61354"
                        src="/line61354-2bu5.svg"
                        className='line6'
                    />
                    <div className='frame16'>
                        <div className='frame17'>
                            <img
                                alt="image3582"
                                src="/image3582-5ylr-900w.png"
                                className='image3'
                            />
                            <span className='text04'>
                                <span>Your Sense of Comfort , Redefined</span>
                            </span>
                            <span className='text06'>
                                <span>The best furniture manufacturer</span>
                            </span>
                            <span className='text08'>
                                <span className='text09'>
                                    With its wide range of modern designed furniture, Hatil is known
                                    for its signature elegance and comfort. Manufactured using the
                                    best quality timber and adhering to lean manufacturing
                                    practices, Hatil is also the only
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <span className='text10'>FSC certified</span>
                                <span> furniture manufacturer in Bangladesh.</span>
                            </span>
                        </div>
                        <div className='frame26'>
                            <div className='frame19'>
                                <span className='text12'>
                                    <span>Kitchen</span>
                                </span>
                            </div>
                            <div className='frame171'>
                                <span className='text14'>
                                    <span>Bedroom</span>
                                </span>
                            </div>
                            <div className='frame18'>
                                <span className='text16'>
                                    <span>Dining</span>
                                </span>
                            </div>
                            <div className='frame151'>
                                <span className='text18'>
                                    <span>New</span>
                                </span>
                            </div>
                            <div className='frame161'>
                                <span className='text20'>
                                    <span>Living</span>
                                </span>
                            </div>
                            <div className='frame20'>
                                <span className='text22'>
                                    <span>Kid’s Room</span>
                                </span>
                            </div>
                            <div className='frame21'>
                                <span className='text24'>
                                    <span>Door</span>
                                </span>
                            </div>
                            <div className='frame22'>
                                <span className='text26'>
                                    <span>SmartFit</span>
                                </span>
                            </div>
                            <div className='frame23'>
                                <span className='text28'>
                                    <span>Institutional</span>
                                </span>
                            </div>
                            <div className='frame24'>
                                <span className='text30'>
                                    <span>Interior</span>
                                </span>
                            </div>
                            <div className='frame25'>
                                <span className='text32'>
                                    <span>Office</span>
                                </span>
                            </div>
                        </div>
                        <div className='frame27'>
                            <div className='frame28'>
                                <img
                                    alt="image463"
                                    src="/image463-469f-400h.png"
                                    className='image4'
                                />
                                <span className='text34'>
                                    <span>NewCastle 110</span>
                                </span>
                                <span className='text36'>
                                    <span>starts from</span>
                                </span>
                                <span className='text38'>
                                    <span>8,000 BDT</span>
                                </span>
                            </div>
                            <div className='frame29'>
                                <img
                                    alt="image7613"
                                    src="/image7613-9pqg-400h.png"
                                    className='image7'
                                />
                                <span className='text40'>
                                    <span>Valeceno 555</span>
                                </span>
                                <span className='text42'>
                                    <span>starts from</span>
                                </span>
                                <span className='text44'>
                                    <span>15,000 BDT</span>
                                </span>
                            </div>
                            <div className='frame30'>
                                <img
                                    alt="image6611"
                                    src="/image6611-pc6-400h.png"
                                    className='image6'
                                />
                                <span className='text46'>
                                    <span>Bradford 080</span>
                                </span>
                                <span className='text48'>
                                    <span>2,000 BDT</span>
                                </span>
                                <span className='text50'>
                                    <span>starts from</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <h1>Welcome</h1>
            </div>

            <div>
                <MainCategoryComponent />
                <SubCategoryComponent />
                <FurnitureContainer />
            </div> */}
        </>
    )
}
