
    let classData = [];
    let className;
    let finalArray = [];
    let performanceLevel;
    let tableData = [];


    fetch("mock_data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {

            let placeholder = document.getElementById("data-output");
            let out = "";
            for (let product of products) {
                const result = product.passing;
                let result_print = 0;
                if (result) {
                    result_print = "Pass";
                } else {
                    result_print = "Failed"
                }
                out += `
         <tr>
            <td>${product.id}</td>
            <td>${product.first_name}</td>
            <td>${product.gender}</td>
            <td>${product.class}</td>
            <td>${product.marks}</td>
            <td>${result_print}</td>
            <td>${product.email}</td>
         </tr>
      `;
            }

            placeholder.innerHTML = out;
        });



    function search() {
        // Selecting the input element and get its value 
        let inputVal = document.getElementById("input").value;
        let placeholder = document.getElementById("data-output");
        let out = "";
        fetch("mock_data.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let i = 0;
                for (let x of data) {
                    // console.log(x.first_name);
                    if (inputVal == x.first_name) {
                        tableData[i] = x;
                        i++;
                    }
                }
                // console.log("Table Data", tableData);
                let result_print = 0;

                for (let product of tableData) {
                    if (product.passing) {
                        result_print = "Pass";
                    } else {
                        result_print = "Failed"
                    }
                    console.log("Product Data", product)
                    out += `
                        <tr>
                            <td>${product.id}</td>
                            <td>${product.first_name}</td>
                            <td>${product.gender}</td>
                            <td>${product.class}</td>
                            <td>${product.marks}</td>
                            <td>${result_print}</td>
                            <td>${product.email}</td>
                        </tr>
                    `;
                }

                placeholder.innerHTML = out;
            })
    }

    function sortAZ() {
        fetch("mock_data.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                tableData = data;
                let placeholder = document.getElementById("data-output");
                let out = "";

                // sort by name
                data.sort(function (a, b) {
                    return a.first_name.localeCompare(b.first_name);
                });

                // console.log(data)


                for (let product of tableData) {
                    // console.log(product)
                    const result = product.passing;
                    let result_print = 0;
                    if (result) {
                        result_print = "Pass";
                    } else {
                        result_print = "Failed"
                    }
                    out += `
                            <tr>
                                <td>${product.id}</td>
                                <td>${product.first_name}</td>
                                <td>${product.gender}</td>
                                <td>${product.class}</td>
                                <td>${product.marks}</td>
                                <td>${result_print}</td>
                                <td>${product.email}</td>
                            </tr>   
                            `;
                }

                placeholder.innerHTML = out;
            })
    }

    function sortZA() {
        fetch("mock_data.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                tableData = data;
                let placeholder = document.getElementById("data-output");
                let out = "";

                // sort by name
                data.sort(function (a, b) {
                    return a.first_name.localeCompare(b.first_name);
                });
                data.reverse();

                for (let product of tableData) {
                    // console.log(product)
                    const result = product.passing;
                    let result_print = 0;
                    if (result) {
                        result_print = "Pass";
                    } else {
                        result_print = "Failed"
                    }
                    out += `
                            <tr>
                                <td>${product.id}</td>
                                <td>${product.first_name}</td>
                                <td>${product.gender}</td>
                                <td>${product.class}</td>
                                <td>${product.marks}</td>
                                <td>${result_print}</td>
                                <td>${product.email}</td>
                            </tr>   
                            `;
                }

                placeholder.innerHTML = out;
            })
    }

    function sortByMarks() {
        fetch("mock_data.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                tableData = data;
                let placeholder = document.getElementById("data-output");
                let out = "";

                // sort by credit
                tableData.sort(function (a, b) {
                    return a.marks - b.marks;
                });

                for (let product of tableData) {
                    // console.log(product)
                    const result = product.passing;
                    let result_print = 0;
                    if (result) {
                        result_print = "Pass";
                    } else {
                        result_print = "Failed"
                    }
                    out += `
                            <tr>
                                <td>${product.id}</td>
                                <td>${product.first_name}</td>
                                <td>${product.gender}</td>
                                <td>${product.class}</td>
                                <td>${product.marks}</td>
                                <td>${result_print}</td>
                                <td>${product.email}</td>
                            </tr>   
                            `;
                }

                placeholder.innerHTML = out;
            })
    }

    function sortByPassing() {
        fetch("mock_data.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                let placeholder = document.getElementById("data-output");
                let out = "";

                for (let product of data) {
                    const result = product.passing;
                    let result_print = 0;
                    if (result) {
                        result_print = "Pass";
                        out += `
                            <tr>
                                <td>${product.id}</td>
                                <td>${product.first_name}</td>
                                <td>${product.gender}</td>
                                <td>${product.class}</td>
                                <td>${product.marks}</td>
                                <td>${result_print}</td>
                                <td>${product.email}</td>
                            </tr>   
                            `;
                    }
                }
                for (let product of data) {
                    // console.log(product)
                    const result = product.passing;
                    let result_print = 0;
                    if (!result) {
                        result_print = "Failed";
                        out += `
                            <tr>
                                <td>${product.id}</td>
                                <td>${product.first_name}</td>
                                <td>${product.gender}</td>
                                <td>${product.class}</td>
                                <td>${product.marks}</td>
                                <td>${result_print}</td>
                                <td>${product.email}</td>
                            </tr>   
                            `;
                    }
                }
                placeholder.innerHTML = out;
            })
    }

    function sortByClass() {
        fetch("mock_data.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                tableData = data;
                let placeholder = document.getElementById("data-output");
                let out = "";

                // sort by credit
                tableData.sort(function (a, b) {
                    return a.class - b.class;
                });

                for (let product of tableData) {
                    // console.log(product)
                    const result = product.passing;
                    let result_print = 0;
                    if (result) {
                        result_print = "Pass";
                    } else {
                        result_print = "Failed"
                    }
                    out += `
                            <tr>
                                <td>${product.id}</td>
                                <td>${product.first_name}</td>
                                <td>${product.gender}</td>
                                <td>${product.class}</td>
                                <td>${product.marks}</td>
                                <td>${result_print}</td>
                                <td>${product.email}</td>
                            </tr>   
                            `;
                }

                placeholder.innerHTML = out;
            })
    }

    function sortedByGender() {
        fetch("mock_data.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                let placeholder = document.getElementById("data-output");
                let out = "";

                for (let product of data) {
                    const gender = product.gender;
                    let result_print = "";
                    if (gender == "Male") {
                        const result = product.passing;
                        let result_print = 0;
                        if (result) {
                            result_print = "Pass";
                        } else {
                            result_print = "Failed"
                        }
                        out += `
                            <tr>
                                <td>${product.id}</td>
                                <td>${product.first_name}</td>
                                <td>${product.gender}</td>
                                <td>${product.class}</td>
                                <td>${product.marks}</td>
                                <td>${result_print}</td>
                                <td>${product.email}</td>
                            </tr>   
                            `;
                    }
                }
                for (let product of data) {
                    // console.log(product)
                    const result = product.passing;
                    const gender = product.gender;
                    let result_print = 0;
                    if (result) {
                        result_print = "Pass";
                    } else {
                        result_print = "Failed"
                    }
                    if (gender == "Female") {
                        out += `
                            <tr>
                                <td>${product.id}</td>
                                <td>${product.first_name}</td>
                                <td>${product.gender}</td>
                                <td>${product.class}</td>
                                <td>${product.marks}</td>
                                <td>${result_print}</td>
                                <td>${product.email}</td>
                            </tr>   
                            `;
                    }
                }
                placeholder.innerHTML = out;
            })
    }