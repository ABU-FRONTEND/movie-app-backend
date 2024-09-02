const data = [
    {
        "id": "1",
        "title": "Beyond Earth",
        "thumbnail": {
            "trending": {
                "small": "https://i.imgur.com/p52nZSA.jpeg",
                "large": "https://i.imgur.com/yz8d9tG.jpeg"
            },
            "regular": {
                "small": "https://i.imgur.com/ccu8nOX.jpeg",
                "medium": "https://i.imgur.com/0da8bfi.jpeg",
                "large": "https://i.imgur.com/KXdLNc3.jpeg"
            }
        },
        "year": 2019,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": true
    },
    {
        "id": "2",
        "title": "Bottom Gear",
        "thumbnail": {

            "trending": {
                "small": "https://i.imgur.com/bJmHfTh.jpeg",
                "large": "https://i.imgur.com/RdW26so.jpeg"
            },
            "regular": {

                "small": "https://i.imgur.com/9V6u327.jpeg",
                "medium": "https://i.imgur.com/WkzGgkF.jpeg",
                "large": "https://i.imgur.com/c7BpE84.jpeg"
            }
        },
        "year": 2021,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": true
    },
    {
        "id": "3",
        "title": "Undiscovered Cities",
        "thumbnail": {
            "trending": {
                "small": "https://i.imgur.com/y017rr0.jpeg",
                "large": "https://i.imgur.com/PFrGibc.jpeg"
            },
            "regular": {
                "small": "https://i.imgur.com/tR99wMl.jpeg",
                "medium": "https://i.imgur.com/dkzSlko.jpeg",
                "large": "https://i.imgur.com/kFbNZM5.jpeg"
            }
        },
        "year": 2019,
        "category": "Tv",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": true
    },
    {
        "id": "4",
        "title": "1998",
        "thumbnail": {
            "trending": {
                "small": "https://i.imgur.com/GMWP7cy.jpeg",
                "large": "https://i.imgur.com/GqsNswq.jpeg"
            },
            "regular": {
                "small": "https://i.imgur.com/F4d6Rq4.jpeg",
                "medium": "https://i.imgur.com/fE9PKhK.jpeg",
                "large": "https://i.imgur.com/Csu58x4.jpeg"
            }
        },
        "year": 2021,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": false,
        "isTrending": true
    },
    {
        "id": "5",
        "title": "Dark Side of the Moon",
        "thumbnail": {
            "trending": {
                "small": "https://i.imgur.com/3kmWuW9.jpeg",
                "large": "https://i.imgur.com/1Gj70Gy.jpeg"
            },
            "regular": {
                "small": "https://i.imgur.com/RswMeGT.jpeg",
                "medium": "https://i.imgur.com/2DbL3GY.jpeg",
                "large": "https://i.imgur.com/TgODqFJ.jpeg"
            }
        },
        "year": 2018,
        "category": "Tv",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": true
    },
    {
        "id": "6",
        "title": "The Great Lands",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/UjMKOhM.jpeg",
                "medium": "https://i.imgur.com/HiqGOCT.jpeg",
                "large": "https://i.imgur.com/jeqm1xa.jpeg"
            }
        },
        "year": 2019,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "7",
        "title": "The Diary",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/iakdmko.jpeg",
                "medium": "https://i.imgur.com/elw0hGy.jpeg",
                "large": "https://i.imgur.com/uUMbBol.jpeg"
            }
        },
        "year": 2019,
        "category": "Tv",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "8",
        "title": "Earth’s Untouched",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/PLafYpL.jpeg",
                "medium": "https://i.imgur.com/V22krfX.jpeg",
                "large": "https://i.imgur.com/OmVsgRo.jpeg"
            }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "id": "9",
        "title": "No Land Beyond",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/L17ko7S.jpeg",
                "medium": "https://i.imgur.com/BJWIXpB.jpeg",
                "large": "https://i.imgur.com/TIp0XJr.jpeg"
            }
        },
        "year": 2019,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "10",
        "title": "During the Hunt",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/YqQ988j.jpeg",
                "medium": "https://i.imgur.com/FFm5755.jpeg",
                "large": "https://i.imgur.com/YWxpV7a.jpeg"
            }
        },
        "year": 2016,
        "category": "Tv",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "11",
        "title": "Autosport the Series",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/IlZTQqX.jpeg",
                "medium": "https://i.imgur.com/0sBpVa7.jpeg",
                "large": "https://i.imgur.com/cNNG7jH.jpeg"
            }
        },
        "year": 2016,
        "category": "Tv",
        "rating": "18+",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "12",
        "title": "Same Answer II",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/nrMYuZ9.jpeg",
                "medium": "https://i.imgur.com/Q9LHNbI.jpeg",
                "large": "https://i.imgur.com/ujGDE0m.jpeg"
            }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "13",
        "title": "Below Echo",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/QWwpnRq.jpeg",
                "medium": "https://i.imgur.com/3R4pEee.jpeg",
                "large": "https://i.imgur.com/zjNnQe6.jpeg"
            }
        },
        "year": 2016,
        "category": "Tv",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "14",
        "title": "The Rockies",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/gLtudeb.jpeg",
                "medium": "https://i.imgur.com/ExORsxL.jpeg",
                "large": "https://i.imgur.com/UET1kdt.jpeg"
            }
        },
        "year": 2015,
        "category": "Tv",
        "rating": "E",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "id": "15",
        "title": "Relentless",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/3sTYzxr.jpeg",
                "medium": "https://i.imgur.com/bnXvyTE.jpeg",
                "large": "https://i.imgur.com/5vAWjeK.jpeg"
            }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "id": "16",
        "title": "Community of Ours",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/GDyrbN3.jpeg",
                "medium": "https://i.imgur.com/oGrSHZT.jpeg",
                "large": "https://i.imgur.com/andgg2r.jpeg"
            }
        },
        "year": 2018,
        "category": "Tv",
        "rating": "18+",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "17",
        "title": "Van Life",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/Jyb79BS.jpeg",
                "medium": "https://i.imgur.com/522X4MW.jpeg",
                "large": "https://i.imgur.com/s7xeHww.jpeg"
            }
        },
        "year": 2015,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "18",
        "title": "The Heiress",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/WuDIqPK.jpeg",
                "medium": "https://i.imgur.com/btuI8Lt.jpeg",
                "large": "https://i.imgur.com/vDcVXtm.jpeg"
            }
        },
        "year": 2021,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "id": "19",
        "title": "Off the Track",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/x6cp3Kq.jpeg",
                "medium": "https://i.imgur.com/vWUH8A8.jpeg",
                "large": "https://i.imgur.com/9UPiB4m.jpeg"
            }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "id": "20",
        "title": "Whispering Hill",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/bXaBt7w.jpeg",
                "medium": "https://i.imgur.com/WfUtW6o.jpeg",
                "large": "https://i.imgur.com/FxthAQ1.jpeg"
            }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "21",
        "title": "112",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/fDrpYyF.jpeg",
                "medium": "https://i.imgur.com/KyVzphl.jpeg",
                "large": "https://i.imgur.com/HOhEmrG.jpeg"
            }
        },
        "year": 2013,
        "category": "Tv",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "22",
        "title": "Lone Heart",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/qIJL2JN.jpeg",
                "medium": "https://i.imgur.com/WqYH9kp.jpeg",
                "large": "https://i.imgur.com/0BjI0OC.jpeg"
            }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "id": "23",
        "title": "Production Line",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/giUeeI6.jpeg",
                "medium": "https://i.imgur.com/C0LyWhY.jpeg",
                "large": "https://i.imgur.com/0AVOgij.jpeg"
            }
        },
        "year": 2018,
        "category": "Tv",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "24",
        "title": "Dogs",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/pcTLBCk.jpeg",
                "medium": "https://i.imgur.com/5iz4qT2.jpeg",
                "large": "https://i.imgur.com/shUadwh.jpeg"
            }
        },
        "year": 2016,
        "category": "Tv",
        "rating": "E",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "id": "25",
        "title": "Asia in 24 Days",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/hxkEOIt.jpeg",
                "medium": "https://i.imgur.com/7eCodnE.jpeg",
                "large": "https://i.imgur.com/EEvoyNd.jpeg"
            }
        },
        "year": 2020,
        "category": "Tv",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "26",
        "title": "The Tasty Tour",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/g4FARab.jpeg",
                "medium": "https://i.imgur.com/wITW2zt.jpeg",
                "large": "https://i.imgur.com/RajYnFW.jpeg"
            }
        },
        "year": 2016,
        "category": "Tv",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "27",
        "title": "Darker",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/5KUWfnY.jpeg",
                "medium": "https://i.imgur.com/eJTuWNn.jpeg",
                "large": "https://i.imgur.com/0i9ovTH.jpeg"
            }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "id": "28",
        "title": "Unresolved Cases",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/uwD1AV0.jpeg",
                "medium": "https://i.imgur.com/jyWzHue.jpeg",
                "large": "https://i.imgur.com/JABwyyc.jpeg"
            }
        },
        "year": 2018,
        "category": "Tv",
        "rating": "18+",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "id": "29",
        "title": "Mission: Saturn",
        "thumbnail": {
            "regular": {
                "small": "https://i.imgur.com/9ak7w0D.jpeg",
                "medium": "https://i.imgur.com/pl9pxV8.jpeg",
                "large": "https://i.imgur.com/8RIwFCC.jpeg"
            }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": false
    }
]

export default data