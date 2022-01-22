import { render, fireEvent, getByTestId} from '@testing-library/react';
import Signup from '@/pages/signup'

describe('Signup', () => {
    it("Submitting a new movie sessions makes changes to localStorage value", () => {
        const { container, rerender } = render(<Signup />);
        const firstnameInput = getByTestId(container, "firstname");
        const lastnameInput = getByTestId(container, "lastname");
        const emailInput = getByTestId(container, "email");
        const avatarInput = getByTestId(container, "avatar");
        const phoneInput = getByTestId(container, "phone");
        const movieInput = getByTestId(container, "movie");
        const timeInput = getByTestId(container, "time");
        const rowInput = getByTestId(container, "row");
        const seatInput = getByTestId(container, "seat");
        const submitButton = getByTestId(container, "submitBtn");

        const dummyMovieSession = {
            firstname: "Joaquim",
            lastname: "Madeira",
            email: "joaquim.madeira91@gmail.com",
            avatar: "",
            phone: "+351 925 252 095",
            movie: "The Godfather (1972)",
            time: "02:00",
            row: "2",
            seat: "9"
        }

        fireEvent.change(firstnameInput, { target: { value: dummyMovieSession.firstname } });
        fireEvent.change(lastnameInput, { target: { value: dummyMovieSession.lastname } });
        fireEvent.change(emailInput, { target: { value: dummyMovieSession.email } });
        fireEvent.change(avatarInput, { target: { value: dummyMovieSession.avatar } });
        fireEvent.change(phoneInput, { target: { value: dummyMovieSession.phone } });
        fireEvent.change(movieInput, { target: { value: dummyMovieSession.movie } });
        fireEvent.change(timeInput, { target: { value: dummyMovieSession.time } });
        fireEvent.change(rowInput, { target: { value: dummyMovieSession.row } });
        fireEvent.change(seatInput, { target: { value: dummyMovieSession.seat } });

        let newMovieSessions = [dummyMovieSession];

        expect(firstnameInput.value).toEqual(dummyMovieSession.firstname);
        expect(lastnameInput.value).toEqual(dummyMovieSession.lastname);
        expect(emailInput.value).toEqual(dummyMovieSession.email);
        expect(avatarInput.value).toEqual(dummyMovieSession.avatar);
        expect(phoneInput.value).toEqual(dummyMovieSession.phone);
        expect(movieInput.value).toEqual(dummyMovieSession.movie);
        expect(timeInput.value).toEqual(dummyMovieSession.time);
        expect(rowInput.value).toEqual(dummyMovieSession.row);
        expect(seatInput.value).toEqual(dummyMovieSession.seat);

        fireEvent.click(submitButton);
        
        rerender(<Signup />);
        
        expect(JSON.parse(window.localStorage.getItem("movieSessions"))).toStrictEqual(newMovieSessions);
    });
})
