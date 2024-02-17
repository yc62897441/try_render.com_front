// 套件
import React from 'react'
import { Link } from 'react-router-dom'

// 靜態資源
import '../style/containers/homepage.scss'

// 自定義 components

// 自定義函數 or 參數

// sectionData1 ~ sectionData3，首頁文字內容
const sectionData1 = {
    title: '貓咪宅急便',
    paragraphs: [
        '歡迎使用「貓咪宅急便」，我們是專為喜愛貓咪的您打造的線上服務。無論您是忙碌的上班族、老年人、或是希望短期體驗養貓樂趣的朋友，我們都能提供便利的貓咪配送服務。',
        '透過「貓咪宅急便」，您只需進行簡單的線上預訂，即可享受到親切可愛的貓咪送上門的服務。我們擁有多款不同品種、個性各異的貓咪，讓您可以依照自己的喜好和需求進行挑選。',
        '我們的宅急便團隊以貓咪的福祉為首要考量，確保貓咪在配送過程中感受到最大程度的舒適和安心。所有貓咪均經過嚴格的健康檢查，並提供完整的疫苗接種紀錄，以確保它們的身體狀態良好。',
        '不僅如此，我們的服務團隊也提供貓咪相關的專業建議和資訊，以確保您在貓咪陪伴的過程中能夠擁有愉快、無憂無慮的體驗。讓「貓咪宅急便」成為您和貓咪之間美好回憶的開始，隨時為您打開擁抱愛貓的大門。',
    ],
    link: {
        url: '/all',
        name: '線上預訂',
    },
}
const sectionData2 = {
    title: '貓咪餐廳',
    paragraphs: [
        '歡迎光臨「貓咪餐廳」，這是一個獨特而充滿愛的用餐體驗，我們為您提供美味的西式簡餐，同時還有可愛的貓迷陪伴您度過每一頓美好的用餐時光。',
        '在「貓咪餐廳」，我們注重食材的新鮮和品質，精心烹製出一系列令人垂涎的西式美食，讓您在用餐的同時感受到滿滿的幸福和滿足。無論是輕盈的沙拉、風味獨特的義大利麵，還是香氣四溢的烤餐，我們都力求為您呈現最頂級的用餐體驗。',
        '而更讓「貓咪餐廳」與眾不同的是，我們提供了親切友善的貓咪伴侶，牠們將陪伴您在用餐的過程中，為您帶來悠閒和愉悅的氛圍。這些可愛的貓咪都是經過嚴格挑選，並受到細心照顧，以確保牠們的愉快性情與親人性格。',
        '「貓咪餐廳」期待成為您享受美食和愛貓雙重樂趣的理想場所，無論是單獨用餐、與摯愛共度浪漫時光，或是與好友聚餐，都能在這裡找到愜意和溫馨。歡迎您來到「貓咪餐廳」，讓美味與貓咪的陪伴共同為您的生活增添色彩。',
    ],
    link: {
        url: '/all',
        name: '了解更多',
    },
}
const sectionData3 = {
    title: '線上認養',
    paragraphs: [
        '歡迎參與「線上認養」，這是一個讓您透過定期信用卡捐款的方式，支援無家可歸的貓咪，為牠們帶來溫暖和希望的緊急計畫。',
        '在現今社會，許多貓咪流浪無依，面臨飢寒交迫的情況。透過「線上認養」，您有機會成為這些無助生靈的贊助者，提供牠們穩定的食物、溫暖的庇護所，以及及時的醫療照護。',
        '參與方式非常簡單，只需進行線上信用卡捐款設定，您的愛心就能持續地幫助這些需要幫助的貓咪。我們承諾，您的捐款將用於改善貓咪的生活狀況，提供牠們愉快、健康的生存環境。',
        '除了捐款，我們也會不定期提供捐助者專屬的貓咪故事、照片更新，讓您能更深切地感受到您的善行所帶來的改變。這是一個共同努力，讓愛心凝聚成為改變生命的力量的機會。',
        '加入「線上認養」，讓我們攜手為這些無辜的生靈帶來光明和關愛。感謝您的支持，讓我們共同努力，讓每一隻貓咪都有機會擁有一個幸福的家。',
    ],
    link: {
        url: '/all',
        name: '立即認養',
    },
}

// 首頁文字內容模板
function HomepageSectionMain({ sectionData }) {
    return (
        <div className='homepageSectionMain'>
            <div className='homepageSectionContent'>
                <h1>{sectionData?.title}</h1>

                {sectionData?.paragraphs?.length > 0 &&
                    sectionData.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                {sectionData?.link && (
                    <Link to={sectionData.link.url}>{sectionData.link.name}</Link>
                )}
            </div>
        </div>
    )
}

function HomePage() {
    // console.log('REACT_APP_CATSAPIKEY', process.env.REACT_APP_CATSAPIKEY.slice(0, 5) + 'aaaaa')

    return (
        <main>
            <section className='homepageSection'>
                <div className='backgroundImageWrapper backgroundImageWrapper1' />

                <HomepageSectionMain sectionData={sectionData1} />
            </section>

            <section className='homepageSection'>
                <div className='backgroundImageWrapper backgroundImageWrapper2' />

                <HomepageSectionMain sectionData={sectionData2} />
            </section>

            <section className='homepageSection'>
                <div className='backgroundImageWrapper backgroundImageWrapper3' />

                <HomepageSectionMain sectionData={sectionData3} />
            </section>
        </main>
    )
}

export default HomePage
