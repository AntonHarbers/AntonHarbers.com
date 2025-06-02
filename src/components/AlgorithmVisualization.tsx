import { useEffect, useState } from "react"
import { Button } from "./ui/button"

export const AlgorithmVisualization = () => {
    const [array, setArray] = useState<number[]>([])
    const [sorting, setSorting] = useState(false)

    useEffect(() => {
        setArray(Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 10))
    }, [])

    const bubbleSort = async () => {
        setSorting(true)
        const arr = [...array]
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                    setArray([...arr])
                    await new Promise((resolve) => setTimeout(resolve, 100))
                }
            }
        }
        setSorting(false)
    }

    return (
        <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-green-400">Bubble Sort Visualization</h3>
            <div className="flex items-end space-x-1 mb-4 h-32">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-t from-blue-500 to-purple-500 transition-all duration-100"
                        style={{
                            height: `${value}%`,
                            width: "20px",
                        }}
                    />
                ))}
            </div>
            <Button onClick={bubbleSort} disabled={sorting} className="bg-green-600 hover:bg-green-700">
                {sorting ? "Sorting..." : "Start Sort"}
            </Button>
        </div>
    )
}