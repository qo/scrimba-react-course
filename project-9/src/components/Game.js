import "./Game.css"
import Die from "./Die"

export default function Game() {
    return (
        <div className="Game">
            <div className="dice">
                <Die value={1} isActive={false} />
                <Die value={2} isActive={true} />
                <Die value={3} isActive={false} />
                <Die value={4} isActive={true} />
                <Die value={5} isActive={false} />
                <Die value={6} isActive={true} />
                <Die value={7} isActive={false} />
                <Die value={8} isActive={true} />
                <Die value={9} isActive={false} />
                <Die value={0} isActive={true} />
            </div>
        </div>
    )
}

/**
 * Challenge:
 *
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components
 *   to look like they do in the slide
 *      - Hints: Create a container to hold the 10 instances
 *        of the Die component, and use CSS Grid to lay them
 *        out evenly in 2 rows of 5 columns
 *      - Use flexbox on main to center the dice container
 *        in the center of the page
 */