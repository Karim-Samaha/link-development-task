import { render, screen, fireEvent } from "@testing-library/react";
import HeroSection from "../HeroSection";
import { HeroData } from "../../../data/Data";

const checkButtonBehavior = (index) => {
    return it(`Check Hero Button Number ${index + 1} Is Working`, () => {
        render(<HeroSection />);
        const button = screen.getByTestId(`bullet-${index}`)
        fireEvent.click(button)
        const textElement = screen.getByText(HeroData[index].title)
        expect(textElement).toBeInTheDocument();
    });
}
describe("Hero Section", () => {
    checkButtonBehavior(0)
    checkButtonBehavior(1)
    checkButtonBehavior(2)
});

