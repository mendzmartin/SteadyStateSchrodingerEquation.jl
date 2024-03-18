var documenterSearchIndex = {"docs":
[{"location":"contact_information/#**Contact**","page":"Contact Information","title":"Contact","text":"","category":"section"},{"location":"contact_information/","page":"Contact Information","title":"Contact Information","text":"Please, contact the project administrator Méndez Martín for any improve suggestion or questions about package use.","category":"page"},{"location":"function_information/#Documentation-of-the-TimeIndependentSchrodingerEquation-module.","page":"Function Information","title":"Documentation of the TimeIndependentSchrodingerEquation module.","text":"","category":"section"},{"location":"function_information/","page":"Function Information","title":"Function Information","text":"Modules = [TimeIndependentSchrodingerEquation]\nOrder   = [:function, :type]","category":"page"},{"location":"function_information/#TimeIndependentSchrodingerEquation.bilineal_forms-Tuple{Function, Function, Function, Gridap.CellData.GenericMeasure}","page":"Function Information","title":"TimeIndependentSchrodingerEquation.bilineal_forms","text":"bilineal_forms(p,q,r,dΩ)\n\nAim\n\nReturns bilineals forms (a(u,v) and b(u,v)) for eigenvalues 1D or 2D (equal masses)\n\nArguments\n\np::Function: kinetic energy function from Sturm Liouville_Formulation.\nq::Function: potential energy function from Sturm Liouville_Formulation.\nr::Function: weight or density function from Sturm Liouville_Formulation.\ndΩ::Gridap.CellData.GenericMeasure: differential FE domain\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.default_solver_eigen_problem-Tuple{Params1D}","page":"Function Information","title":"TimeIndependentSchrodingerEquation.default_solver_eigen_problem","text":"default_solver_eigen_problem(params)\n\nAim\n\nFunction to resolve unidimensonal eigen problem\n\nArguments\n\nparams::Params1D: parameters of 1D potential\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.default_solver_eigen_problem-Tuple{Params2D, Tuple}","page":"Function Information","title":"TimeIndependentSchrodingerEquation.default_solver_eigen_problem","text":"default_solver_eigen_problem(params)\n\nAim\n\nFunction to resolve bidimensonal eigen problem over cartesian grid\n\nArguments\n\nparams::Params2D: parameters fo 2D potential\ndifferent_masses::Tuple: keyword to specify if we want to simulate two particles with diferent masses\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.eigen_problem-Tuple{Function, Function, Gridap.FESpaces.FESpace, Gridap.FESpaces.FESpace}","page":"Function Information","title":"TimeIndependentSchrodingerEquation.eigen_problem","text":"eigen_problem(weakformₖ,weakformₘ,test,trial;; <keyword arguments>)\n\nAim\n\nDefine eigen problem as an input to solve function where we compute eigen problem by Arpack eigs function.\n\nArguments\n\nweakformₖ::Function: forma bilineal lado izquierdo de la formulación débil\nweakformₘ::Function: forma bilineal lado derecho de la formulación débil\ntest::FESpace: espacio de prueba, puede ser MultiFieldFESpace\ntrial::FESpace: espacio de solución, puede ser MultiFieldFESpace\nnev::Int=10: número de autovalores requeridos\ntol::Float64=10e-6: relative tolerance for convergence of Ritz values\nmaxiter::Integer=100: maximum number of iterations\nexplicittransform::Symbol=:none: shift and invert should be explicitly invoked in julia code\n=:auto:\n=:shiftinvert:\nsigma::Float64=1.0: the level shift used in inverse iteration.\nwhich::Symbol=:LM: eigenvalues of largest magnitude (default)\n=:SM: eigenvalues of smallest magnitude\n=:LR: eigenvalues of largest real part\n=:SR: eigenvalues of smallest real part\n=:LI: eigenvalues of largest imaginary part (nonsymmetric or complex matrix only)\n=:SI: eigenvalues of smallest imaginary part (nonsymmetric or complex matrix only)\n=:BE: compute half of the eigenvalues from each end of the spectrum, biased in favor of the high end. (real symmetric matrix only)\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.eigen_values_and_eigen_vectors-Tuple{Function, Function, Function, Gridap.CellData.GenericMeasure, Gridap.FESpaces.FESpace, Gridap.FESpaces.FESpace}","page":"Function Information","title":"TimeIndependentSchrodingerEquation.eigen_values_and_eigen_vectors","text":"eigen_values_and_eigen_vectors(p,q,r,dΩ,USpace,VSpace; <keyword arguments>)\n\nAim\n\nCompute matrix eigen problem and return eigenvalues and eigenvectors\n\nArguments\n\np,q,r::Function: functions from Sturm Liouville formulation\ndΩ::Gridap.CellData.GenericMeasure: measure of FE grid\nUSpace::FESpace: trial FE Space\nVSpace::FESpace: test FE Space\nparams::Tuple=(nev,tol,maxiter,explicittransform,sigma): params to Arpack eigs function.\nnev::Integer=10: quantity of eigendata to calculate\ntol::Float64=10e-9: relative tolerance for convergence of Ritz values\nmaxiter::Integer=100: maximum number of iterations\nexplicittransform::Symbol=:none: shift and invert should be explicitly invoked in julia code\nsigma::Float64=1.0: the level shift used in inverse iteration.\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.fe_spaces-Tuple{Any, Tuple, String}","page":"Function Information","title":"TimeIndependentSchrodingerEquation.fe_spaces","text":"fe_spaces(model,reff,grid_type; <keyword arguments>)\n\nAim\n\nCreate finite element (FE) spaces (Trial and Test spaces).\n\nArguments\n\nBC_type::String=\"FullDirichlet\": the type of boundary condition.\nTypeData::Type=ComplexF64: the type of data to define FE spaces.\nconf_type::Symbol=:H1: the regularity of the interpolation at the boundaries of cells in the mesh. (e.g.:L2,:H1,:C0,:Hgrad,)\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.input_data-Tuple{String}","page":"Function Information","title":"TimeIndependentSchrodingerEquation.input_data","text":"input_data(data_file_name)\n\nAim\n\nDefinition of input data form input.dat file using specific type structures.\n\nArguments\n\ndata_file_name::String: name of input data file\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.measures-Tuple{Any, Integer, Any}","page":"Function Information","title":"TimeIndependentSchrodingerEquation.measures","text":"measures(model,degree,tags_boundary)\n\nAim\n\nThe triangulation and integration aproximated Lebesgue measures\n\nArguments\n\nmodel: FE grid model.\ndegree::Integer: degree of quadrature rule to use in the cells of triangulation.\ntags_boundary: tags of boundary conditions.\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.norm_l2-Tuple{Gridap.CellData.CellField, Gridap.CellData.GenericMeasure}","page":"Function Information","title":"TimeIndependentSchrodingerEquation.norm_l2","text":"norm_l2(𝜳,dΩ)\n\nAim\n\nCompute de L2 norm for specific FE wave function\n\nArguments\n\n𝜳::CellField: specific FE wave function\ndΩ::Gridap.CellData.GenericMeasure: integration domain\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.read_bin-Tuple{String}","page":"Function Information","title":"TimeIndependentSchrodingerEquation.read_bin","text":"read_bin(fileName;<keyword arguments>)\n\nAim\n\nRead binary file\n\nArguments\n\nfileName::String: name of file data\nmatrix_data::Bool: optional boolean keyword to specify matrix or array data\nc_dim::Int: optional column number of matrix data\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.read_bin-Union{Tuple{T}, Tuple{IO, Type{T}, Int64, Bool, Int64}} where T","page":"Function Information","title":"TimeIndependentSchrodingerEquation.read_bin","text":"read_bin(io,::Type{T},n,matrix_data,c_dim)\n\nAim\n\nSpeeds up the read binary file\n\nArguments\n\nio::IO: in/output variable\n::Type{T}: data type\nn::Int: total number of elements in array/matrix data\nmatrix_data::Bool: boolean keyword to specify matrix or array data\nc_dim::Int: column number of matrix data\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.solve-Tuple{TimeIndependentSchrodingerEquation.EigenProblem}","page":"Function Information","title":"TimeIndependentSchrodingerEquation.solve","text":"solve(prob)\n\nAim\n\nCompute eigen problem by Arpack eigs function and return eigenvalues and eigenvectors.\n\nArguments\n\nprob::EigenProblem: problem deinition\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.space_coord-Tuple{Tuple, Any, Any}","page":"Function Information","title":"TimeIndependentSchrodingerEquation.space_coord","text":"space_coord(dom,Δr,n;<keyword arguments>)\n\nAim\n\nReturns coordinate vector (r) and discrete points (pts) for 1D or 2D spaces.\nif dimension==\"1D\" ⇒ dom=(x₁,x₂); Δr=Δx; n=nx\nif dimension==\"2d\" ⇒ dom=(x₁,x₂,y₁,y₂); Δr=(Δx,Δy); n=(nx,ny)\n\nArguments\n\ndom::Tuple: FE cartesian domain.\nΔr:: discretization of FE space.\nn:: number of FE in each direction.\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.write_bin-Union{Tuple{T}, Tuple{Matrix{T}, String}} where T","page":"Function Information","title":"TimeIndependentSchrodingerEquation.write_bin","text":"write_bin(x,fileName;<keyword arguments>)\n\nAim\n\nWrite binary file from matrix data\n\nArguments\n\nx::Matrix{T}: matrix data\nfileName::String: name of file data\nexisting_file::Bool=false: optional boolean keyword to delete or not delete existing data\n\n\n\n\n\n","category":"method"},{"location":"function_information/#TimeIndependentSchrodingerEquation.write_bin-Union{Tuple{T}, Tuple{Vector{T}, String}} where T","page":"Function Information","title":"TimeIndependentSchrodingerEquation.write_bin","text":"write_bin(x,fileName;<keyword arguments>)\n\nAim\n\nWrite binary file from array data\n\nArguments\n\nx::Array{T,1}: array/vector data\nfileName::String: name of file data\nexisting_file::Bool=false: optional boolean keyword to delete or not delete existing data\n\n\n\n\n\n","category":"method"},{"location":"guide_information/#**How-we-can-use-TimeIndependentSchrodingerEquation-package-?**","page":"Guide Information","title":"How we can use TimeIndependentSchrodingerEquation package ?","text":"","category":"section"},{"location":"guide_information/#**1.-Clone-TimeIndependentSchrodingerEquation-package**","page":"Guide Information","title":"1. Clone TimeIndependentSchrodingerEquation package","text":"","category":"section"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"First we need to clone package from GitHub repository as follow","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"    @prompt$: cd ~/my_directory/\n    @my_directory$: git clone https://github.com/mendzmartin/TimeIndependentSchrodingerEquation.jl.git","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"This will download a folder called TimeIndependentSchrodingerEquation.jl, it is important to keep the .jl extension in the repository name. And, in case we have already cloned the repository, we must update it by running git pull.","category":"page"},{"location":"guide_information/#**2.-Build-Julia-code-to-use-TimeIndependentSchrodingerEquation-package**","page":"Guide Information","title":"2. Build Julia code to use TimeIndependentSchrodingerEquation package","text":"","category":"section"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"    @prompt$: mkdir ~/my_folder\n    @prompt$: cd ~/my_folder\n    @my_folder$: julia\n               _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.9.0 (2023-05-07)\n _/ |\\__'_|_|_|\\__'_|  |  Official https://julialang.org/ release\n|__/                   |","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"    julia> Ctrl+]\n    (@v1.9) pkg>\n    (@v1.9) pkg> activate .\n    (@my_folder) pkg> instantiate()\n    (@my_folder) pkg> dev ~/my_directory/TimeIndependentSchrodingerEquation.jl\n    (@my_folder) pkg> add Revise\n    julia> exit()","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"then build Julia code with following structure:","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"module MyModule\n\nusing Pkg\nPkg.activate(\"./\")\nPkg.instantiate()\n\nusing TimeIndependentSchrodingerEquation\nusing Revise\n\n#=\n... ...\n    code block where we use function\n    from TimeIndependentSchrodingerEquation package\n... ....\n=#\n\nend","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"Then we save de Julia code below name MyModule.jl. After that, we can run the code doing this","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"    @my_directory$: julia MyModule.jl","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"Also, if we have activated multi-thread configuration we can use the next command to activate parallelism:","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"    @my_directory$: julia -t 4 MyModule.jl","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"where we have specified 4 threads as parallelization.","category":"page"},{"location":"guide_information/#Run-from-Julia-REPL","page":"Guide Information","title":"Run from Julia REPL","text":"","category":"section"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"We can also run the package directly from Julia REPL by opening the terminal Ctrl+Alt+T inside the package folder and typing the following commands inside the terminal:","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"    @prompt$: cd my_directory/TimeIndependentSchrodingerEquation.jl/\n    @TimeIndependentSchrodingerEquation.jl$: julia\n               _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.9.0 (2023-05-07)\n _/ |\\__'_|_|_|\\__'_|  |  Official https://julialang.org/ release\n|__/                   |","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"    julia> Ctrl+]\n    (@v1.9) pkg>\n    (@v1.9) pkg> activate .\n    (@my_folder) pkg> instantiate()\n    (@my_folder) pkg> dev ~/my_directory/TimeIndependentSchrodingerEquation.jl\n    (@my_folder) pkg> add Revise\n    julia> using TimeIndependentSchrodingerEquation\n    julia> using Revise","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"and then we can, for example, access Julia's help mode to ask for specific package functions such as the following:","category":"page"},{"location":"guide_information/","page":"Guide Information","title":"Guide Information","text":"    julia> Shift+?\n    help?> space_coord\n    search: space_coord\n\n    if dimension==\"1D\" ⇒ dom=(x₁,x₂); Δr=Δx; n=nx\n    if dimension==\"2d\" ⇒ dom=(x₁,x₂,y₁,y₂); Δr=(Δx,Δy); n=(nx,ny)","category":"page"},{"location":"simulation_example/#How-to-run-default-eigen-problems-defined-inside-TimeIndependentSchrodingerEquation-Package","page":"Simulation Example","title":"How to run default eigen problems defined inside TimeIndependentSchrodingerEquation Package","text":"","category":"section"},{"location":"simulation_example/#Coling-TimeIndependentSchrodingerEquation-package-repository","page":"Simulation Example","title":"Coling TimeIndependentSchrodingerEquation package repository","text":"","category":"section"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"First of all you need to clone package from GitHub repository as follow","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"    @prompt$: cd ~/my_directory/\n    @my_directory$: git clone https://github.com/mendzmartin/TimeIndependentSchrodingerEquation.jl.git","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"This will download a folder called TimeIndependentSchrodingerEquation.jl, it is important to keep the .jl extension in the repository name. And, in case we have already cloned the repository, we must update it by running git pull.","category":"page"},{"location":"simulation_example/#Simulate-predefined-potential","page":"Simulation Example","title":"Simulate predefined potential","text":"","category":"section"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"Create a folder where you want to save simuation data, from Bash terminal write","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"    @prompt$: mkdir ~/my_folder\n    @prompt$: cd ~/my_folder\n    @my_folder$: julia\n               _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.9.0 (2023-05-07)\n _/ |\\__'_|_|_|\\__'_|  |  Official https://julialang.org/ release\n|__/                   |","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"    julia> Ctrl+]\n    (@v1.9) pkg>\n    (@v1.9) pkg> activate .\n    (@v1.9) pkg> dev ~/my_directory/TimeIndependentSchrodingerEquation.jl\n    (@v1.9) pkg> add Revise\n    julia> exit()","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"Then, open a Julia file @my_folder$: vi my_script.jl and write the following comands:","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"    begin\n        using Pkg\n        Pkg.activate(\"./\")\n        Pkg.instantiate()\n        \n        using Revise\n        using TimeIndependentSchrodingerEquation;\n        \n        run_default_eigen_problem(set_type_potential())\n    end","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"After save the changes you can run the script and see de following","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"    @my_folder$: julia my_script.jl\n  Activating project at `~/test_default_eigen_problem_from_input`\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\nThe types of default potential can be:\n   - Unidimensional Quantum Harmonic Oscillator            --> set (1)\n   - Unidimensional Symmetric Finit Kronig-Penney          --> set (2)\n   - Unidimensional Finit Well Potential                   --> set (3)\n   - Bidimensional Isotropic Quantum Harmonic Oscillator   --> set (4)\n   - Ad hoc potential                                      --> set (5)\n   - Ad hoc potential from input file                      --> set (6)\nPlease, set some number to specify the type potential:","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"Then you can specify the set number to run a specific potential. Be carefull when you set the numbers 5 or 6 because you need to do a little more steps before to run over this simulations (see the next).","category":"page"},{"location":"simulation_example/#Simulate-custom-potential","page":"Simulation Example","title":"Simulate custom potential","text":"","category":"section"},{"location":"simulation_example/#Definitons-of-specific-potentials","page":"Simulation Example","title":"Definitons of specific potentials","text":"","category":"section"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"First you need to create a folder called adhoc_potential like this","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"    @my_folder$: mkdir ./adhoc_potential\n    @my_folder$: cd ./adhoc_potential","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"Inside adhoc_potentials/ folder we need to create a Julia file with name my_julia_file.jl where we can find custom potential functions in specific format.","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"Inside our my_julia_file.jl folder the format to write custom potential function need to be like follows:","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"Unidimensional potential","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"    export my_potential_1d\n    function my_potential_1d(x,params::Tuple)\n        λ₁,λ₂,λ₃...=params\n        return f(x[1],λ₁,λ₂,λ₃...)\n    end","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"Here params is a Tuple with potential parameters (can be Integers, Floats, Complex, etc) and f(x[1],λ₁,λ₂,λ₃...) is an expresion(function) of x[1] (unidmensional DOF) and λᵢ's (parameters).","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"Bidimensional potential","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"    export my_potential_2d\n    function my_potential_2d(x,params::Tuple)\n        λ₁,λ₂,λ₃...=params\n        return f(x[1],x[2],λ₁,λ₂,λ₃...)\n    end","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"Here params is a Tuple with potential parameters (can be Integers, Floats, Complex, etc) and f(x[1],x[2],λ₁,λ₂,λ₃...) is an expresion(function) of x[1] (unidmensional DOF), x[2] (unidmensional DOF) and λᵢ's (parameters).","category":"page"},{"location":"simulation_example/#Building-input-data-for-custom-potential-simulations","page":"Simulation Example","title":"Building input data for custom potential simulations","text":"","category":"section"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"In some specific folder we need to create a data folder @my_folder$: vi my_input.dat with custom potential input information behing the following format (the data next to equal sign is only for example information)","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"full_path_name              = ../my_folder_name/my_file_name\ndom_type                    = s\nnev                         = 10\ndimension                   = 1D\nsigma                       = 0.0\nadhoc_file_name             = my_adhoc_potentials\npotential_function_name     = my_potential\nparams_potential_types      = f f f\nparams_potential            = 1.0 0.1 10.0\nanalysis_param              = 2 0.0 0.1 0.01\n## ONLY FOR 1D EIGENPROBLEMS\nL                           = 100.0\nΔx                          = 0.1\n## ONLY FOR 2D EIGENPROBLEMS\nLx                          = \nLy                          = \nnx                          = \nny                          = \ndifferent_masses            = \nreduced_density             = \n\n\n# #################################################################################################\n    full_path_name::String:           Full path name where you want to write problem results\n    dom_type::String                  Domain type (symetric (s) or non-symetric (ns) domain)\n    nev::Integer:                     Number of eigenvalues\n    dimension::String:                Dimension of eigen value problem\n    sigma::Real:                      Level shift used in inverse iteration [au]\n    adhoc_file_name::String:          Julia file name with ad hoc potential\n    potential_function_name::String:  Name of ad hoc potential function\n    params_potential_types:           Paremters type -> f (Float), i (Integer), c (Complex)\n    params_potential:                 Parameters of ad hoc potential function\n    analysis_param\n        only if want to sweap a parameter from params_potential\n            analysis_param = λindex::Integer λi λf Δλ\n        else\n            analysis_param = false\n    only if dimension == 1D\n        L::Real:                      Finite element domain length [au]\n        Δx::Real:                     Finite element size [au]\n    only if dimension == 2D\n        Lx::Real:                     Finite element domain length of x direction [au]\n        Ly::Real:                     Finite element domain length of y direction [au]\n        nx::Integer:                  Number of finite element of x direction\n        ny::Integer:                  Number of finite element of y direction\n        different_masses\n            only if want to simulate 2 particles with different masses\n                different_masses::Real = DOF2mass\n            else\n                different_masses::Bool = false\n        reduced_density\n            if want to compute reduced densities\n                reduced_density::Bool = true\n            else\n                reduced_density::Bool = false\n# #################################################################################################\n\n# #################################################################################################\n    WARNIG! Beware of whitespace between data values and do not use spaces in variables named\n    full_path_name, adhoc_file_name and potential_function_name.","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"Then you can run the script and set options 5 or 6 like this:","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"    @my_folder$: julia my_script.jl\n  Activating project at `~/test_default_eigen_problem_from_input`\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\nThe types of default potential can be:\n   - Unidimensional Quantum Harmonic Oscillator            --> set (1)\n   - Unidimensional Symmetric Finit Kronig-Penney          --> set (2)\n   - Unidimensional Finit Well Potential                   --> set (3)\n   - Bidimensional Isotropic Quantum Harmonic Oscillator   --> set (4)\n   - Ad hoc potential                                      --> set (5)\n   - Ad hoc potential from input file                      --> set (6)\nPlease, set some number to specify the type potential: 6\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\nSet full path name (e.g: \"./my_directory/my_input_data\") where the data is specified and press Enter =","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"Where we were specified the full path name of our input data (only for option 6). Also, we can specify this full path name inside Julia script like following:","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"First open script file @my_folder$: vi my_script.jl and write the following comands:","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"    begin\n        using Pkg\n        Pkg.activate(\"./\")\n        Pkg.instantiate()\n        \n        using Revise\n        using TimeIndependentSchrodingerEquation;\n        \n        path_input_data = \"./my_input\"\n        run_default_eigen_problem(set_type_potential(path_input_data))\n    end","category":"page"},{"location":"simulation_example/","page":"Simulation Example","title":"Simulation Example","text":"Then you can run the script @my_folder$: julia my_script.jl and wait for simulation results.","category":"page"},{"location":"#TimeIndependentSchrodingerEquation.jl","page":"Home","title":"TimeIndependentSchrodingerEquation.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A documentation generator for Julia.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Julia package repository to resolve Time-Independent Schrödinger equation by (F)init (E)lement (M)ethod. This is an implementation of Gridap package for unidimensional and bidimensional grids.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Project carried out in my PhD studies of Physics at:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Faculty of Mathematics, Astronomy, Physics and Computation (FaMAF)\nThe Enrique Gaviola Institute of Physics (IFEG)","category":"page"},{"location":"#**Warning!**","page":"Home","title":"Warning!","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"***->> The package is under construction <<-***","category":"page"}]
}
