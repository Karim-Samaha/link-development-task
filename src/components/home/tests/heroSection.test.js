import { render, screen, fireEvent } from "@testing-library/react";
import HeroSection from "../HeroSection";
import { HeroData } from "../../../data/Data";
import styles from '../home.module.css'
const checkButtonBehavior = (index) => {
    return it(`Check Hero Button Number ${index + 1} Is Working`, () => {
        render(<HeroSection />);
        const button = screen.getByTestId(`bullet-${index}`)
        fireEvent.click(button)
        const titleElement = screen.getByText(HeroData[index].title)
        const subTitle = screen.getByText(HeroData[index].body)
        expect(titleElement).toBeInTheDocument();
        expect(subTitle).toBeInTheDocument();

    });
}
describe("Hero Section", () => {
    checkButtonBehavior(0)
    checkButtonBehavior(1)
    checkButtonBehavior(2)
});

