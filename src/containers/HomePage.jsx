// 套件
import React from 'react'
import { Link } from 'react-router-dom'

// 靜態資源
import '../style/containers/homepage.scss'

// 自定義 components

// 自定義函數 or 參數
import { sections } from '../config/containers/homepage'

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
    return (
        <main>
            {sections?.length > 0 &&
                sections.map((sectionData, index) => (
                    <section className='homepageSection' key={index}>
                        <div
                            className={
                                'backgroundImageWrapper ' + `backgroundImageWrapper${index + 1}`
                            }
                        />
                        <HomepageSectionMain sectionData={sectionData} />
                    </section>
                ))}
        </main>
    )
}

export default HomePage
