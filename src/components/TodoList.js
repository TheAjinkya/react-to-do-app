import React, { useState } from 'react'

const TodoList = () => {

    const [detailsList, setDetailsList] = useState([]);

    const [loading, setLoading] = useState()

    const getDetails = async () => {

        try {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            console.log(response)
            if(!response.ok){
                throw new Error("Somethings went wrong")
            }
            const dataList = await response.json()
            const transformedData = await dataList.map(res => {
                return {
                    id: res.id,
                    title: res.name
                }
            })
            console.log(transformedData)
            setDetailsList(transformedData)
            setLoading(false)
        } catch (error) {

        }
    }

    return (<div>
        Hello Todo! <br />
        <button onClick={getDetails}>Get Data</button>
        <hr />
        {!loading &&
            <ul>{detailsList.map(res => <li>{res.title}</li>)}</ul>
        }
        {
            loading && <p>loading..</p>
        }

    </div>)
}

export default TodoList