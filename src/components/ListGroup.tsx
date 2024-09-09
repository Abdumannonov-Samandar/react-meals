import { useState, useEffect } from 'react'
import CardContent from './CardContent'
import { categorys } from './categorys'

interface CardProps {
    idCategory: number
    strCategory: string
    strCategoryThumb: string
    strCategoryDescription: string
}

interface MealProps {
    idMeal: number
    strMeal: string
    strMealThumb: string
}

const ListGroup = () => {
    const [categories, setCategories] = useState<CardProps[]>([])
    const [meals, setMeals] = useState<MealProps[]>([])
    const [category, setCategory] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)

        const fetchData = async () => {
            try {
                let url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

                if (category) {
                    url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
                } 
                const response = await fetch(url)
                const data = await response.json()

                if (category) {
                    setMeals(data.meals || [])
                    setCategories([])
                } else {
                    setCategories(data.categories || [])
                    setMeals([])
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [category])

    if (isLoading) return <h1 className='text-5xl text-center'>Loading...</h1>

    return (
        <section className="py-10 bg-gradient-to-t">
            <div className="container mx-auto max-w-[1200px] px-4">
                <form className="flex justify-center items-center gap-10 py-10">
                    <div className="relative h-10 w-72 min-w-[200px]">
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        >
                            <option value="">All</option>
                            {categorys.map((category) => (
                                <option key={category.id}>{category.label}</option>
                            ))}
                        </select>
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Select a Category
                        </label>
                    </div>
                </form>
                
                {categories.length > 0 && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 text-center lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {categories.map((category) => (
                            <CardContent
                                key={category.idCategory}
                                Image={category.strCategoryThumb}
                                title={category.strCategory}
                                desctription={category.strCategoryDescription.slice(0, 140) + '...'}
                            />
                        ))}
                    </ul>
                )}
                
                {meals.length > 0 && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 text-center lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {meals.map((meal) => (
                            <CardContent key={meal.idMeal} Image={meal.strMealThumb} title={meal.strMeal} />
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}

export default ListGroup
