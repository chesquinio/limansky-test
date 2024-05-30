import { useEffect, useState } from 'react'

const useCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://api-evaluaciones-test.limansky.com/modules/modules")
          .then((response) => response.json())
          .then((data) => setCategories(data))
      }, [])

    return categories  
}

export default useCategories