import React from "react";

const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <button className="btn btn-primary">Register</button>
                </div>

                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Saurabh</td>
                            <td>13/May/2023</td>
                            <td>sau@gmail.com</td>
                            <td className="d-flex justify-content-between">
                                <button className="btn btn-success"><i class="fa-solid fa-eye"></i></button>
                                <button className="btn btn-primary"><i class="fa-sharp fa-solid fa-pen-to-square"></i></button>
                                <button className="btn btn-danger"><i class="fa-sharp fa-solid fa-eraser"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Home