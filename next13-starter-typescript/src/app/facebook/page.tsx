'use client'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap';

const Facebook = () => {
    const router = useRouter()
    const handleBack = () => {
        router.push('/')
    }
    return (
        <div>
            Facebook page
            <div>
                <Button variant='primary'>Hỏi Dân IT</Button>
                <button onClick={() => handleBack()}>Back Home</button>
            </div>
        </div>

    )
}

export default Facebook;