import { render, screen, fireEvent } from "@testing-library/react";
import NewsSection from "../News";
import { AllNews } from "../../../data/Data";


describe("News Section Buttons", () => {
    return it(`Check The News Filteration Buttons Exist`, () => {
        render(<NewsSection />);
        const Buttons = ["All news", ...AllNews.map((item) => item.type)]
        for (let i = 0; i < Buttons.length; i++) {
            const button = screen.getByRole('button', {
                name: Buttons[i]
            })
            expect(button).toBeInTheDocument();
        }
    })
})

describe("News Section Buttons Functionality", () => {
    return it(`Check is News Buttons Working`, () => {
        render(<NewsSection />);
        const Buttons = ["All news", ...AllNews.map((item) => item.type)]
        for (let i = 0; i < Buttons.length; i++) {
            const button = screen.getByRole('button', {
                name: Buttons[i]
            })
            const ExistingNewsLength = screen.getAllByTestId("news-card").length
            fireEvent.click(button)
            if (Buttons[i] === 'All news') {
                expect(ExistingNewsLength).toEqual(AllNews.length)
            } else {
                const NewsLengthToExist = AllNews.filter((item) => item.type === Buttons[i]).length
                expect(NewsLengthToExist).toEqual(NewsLengthToExist)
            }
        }
    })
})

