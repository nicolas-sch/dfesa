import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Footer from './footer'
import VectorTop from '../assets/Vector-top-news-details.svg'
import VectorBottom from '../assets/Vector-bottom-news-details.svg'

function NoticiasDetails() {
    const {id} = useParams()
    const [result, setResult] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        async function fetchData(){
            setLoading(true)
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/noticias/${id}`)
                
                setResult(res.data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [id])
    
    return (
        <div>
            
            <section className='details-hero'>
                <div className='details-hero-container'>
                    <h2>{result.noticiasHeroTitulo}</h2>
                </div>
            </section>
            <section className='details-text'>
                <div className='image-top-details'>
                    <img src={VectorTop}/>
                </div>
                <div className='details-back-button'>
                    <a href='/noticias'>&lt; Voltar</a>
                </div>
                <div className='details-text-container'>
                    <h3>{result.noticiaSubtitulo}</h3>
                    <span>Por {result.noticiaAutor}</span>
                    <a href='https://br.linkedin.com/company/dfesa-donafranciscaenerg%C3%A9ticasa?trk=ppro_cprof' target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <p>{result.noticiaTexto}</p>
                </div>
                <div className='image-bottom-details'>
                    <img src={VectorBottom}/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default NoticiasDetails