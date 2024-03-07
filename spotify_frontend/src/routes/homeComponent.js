import { Icon } from '@iconify/react';
import spotify_logo from '../assets/images/spotify_logo_white.svg';
import IconText from '../components/shared/IconText';
import TextWithHower from '../components/shared/TextWithHower';
import { Link } from 'react-router-dom';

const focusCardsData = [
    {
        title: "Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];

const spotifyPlaylistsCardData = [
    {
        title: "This is one",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];

const HomeComponent=()=>{
    return (
        <div className="h-full w-full flex" >
            {/*this is the left colonm */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10 ">
                <div>
                    {/* This div is for logo div */}
                    <div className='p-6'>
                        <img src={spotify_logo} alt={spotify_logo} width={125}/>
                    </div>
                    <div className='py-5'>
                        <div>
                            <IconText 
                            iconName={"majesticons:home"}
                            displayName={"Home"}
                            active
                            />
                        </div>
                        <div>
                            <IconText 
                            iconName={"ion:search-sharp"}
                            displayName={"Search"}
                            />
                        </div>
                        <div>
                            <IconText 
                            iconName={"fluent-mdl2:library"}
                            displayName={"Your Library"}
                            />
                        </div>
                    </div>
                    <div className='pt-5'>
                        <IconText 
                            iconName={"basil:add-solid"}
                            displayName={"Create Playlist"}
                            />
                        <IconText 
                            iconName={"flat-color-icons:like"}
                            displayName={"Liked Songs"}
                            />    
                    </div>
                </div>
                <div className='px-7'>
                    <div className='border border-grey-100 text-white w-2/5 flex px-2 py-1 item-center justify-center rounded-full cursor-pointer'>
                        <Icon icon='ion:globe-outline'/>
                        <div className='pl-2 text-sm font-semibold'>
                        English
                        </div>
                    </div>
                </div>
            </div>
            {/*this is the Right colonm */}
            <div className="h-full w-4/5 overflow-auto">
                {/*this is the left colonm navbar*/}
                <div className='navbar w-full h-1/10 bg-black bg-opacity-95 flex justify-end '>
                    <div className='w-1/2 flex h-full'>
                        <div className='w-3/5 flex justify-around items-center'>
                            <TextWithHower displayText={"Premium"}/>
                            <TextWithHower displayText={"Support"}/>
                            <TextWithHower displayText={"Download"}/>
                            <div className='border border-r h-1/2 '></div>
                        </div>
                        <div className='w-2/5 flex h-full justify-around items-center'>
                            <Link to={"/signup"}>
                            <TextWithHower displayText={"Sign Up"}/>
                            </Link>
                            <div>
                                <button className='bg-white h-2/3 px-5 py-2 flex items-center justify-center rounded-full font-semibold cursor-pointer'>
                                <Link to="/login">
                                    Log in
                                </Link>
                                </button>
                            </div>
                        </div>
                </div>
                </div>
                {/*this is the left colonm main content */}
                <div className='content w-full h-9/10 bg-black opacity-90 overflow-auto'>
                    <div className='p-8'>
                        <PlaylistView 
                            titleText={"Focus"}
                            cardsData={focusCardsData}
                        />
                        <PlaylistView 
                            titleText={"Spotify Playlist"}
                            cardsData={spotifyPlaylistsCardData}
                        />
                        <PlaylistView 
                            titleText={"sound of India"}
                            cardsData={focusCardsData}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );  
}

const PlaylistView=({titleText ,cardsData})=>{
    return ( 
        <div className='text-white '>
            <div className='text-xl font-semibold my-5'>{titleText}</div>
            <diV className="w-full flex justify-between space-x-3">
            {
                    // cardsData will be an array
                    cardsData.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        );
                    })
            }
            
            </diV>
            
        </div>
    );
}

const Card=({title,description ,imgUrl})=>{
    return(
        <div className='bg-gray-900 w-1/5 p-4 rounded-lg'>
            <div className='w-full rounded-full'>
                <img
                    src={imgUrl}
                    alt="lable"
                />
            </div>
            <div className='text-white font-semibold py-3'>{title}</div>
            <div className='text-gray-400 text-sm'>{description}</div>
        </div>
    )
}

/*
const Card=({title,descreption})=>{
    return(
        <div className='bg-black opacity-60 w-1/6 p-4 flex  '>
            <div>
                <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80"
                alt="lable"
                />
            </div>
            <div>
                <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80"
                alt="lable"
                />
            </div>
            <div>
                <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80"
                alt="lable"
                />
            </div>
            <div>
                <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80"
                alt="lable"
                />
            </div>
            <div>
                <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80"
                alt="lable"
                />
            </div>
            <div className='text-white text-sm font-semibold'>{title}</div>
            <div className='text-gray-500 text-xs'>{descreption}</div>
        </div>
    );
}*/
export default HomeComponent;