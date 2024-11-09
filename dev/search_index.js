var documenterSearchIndex = {"docs":
[{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"EditURL = \"../../../lit/examples/advanced_reco.jl\"","category":"page"},{"location":"generated/examples/advanced_reco/#02-CS_reconstruction","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"","category":"section"},{"location":"generated/examples/advanced_reco/#Description","page":"Compressed-sensing reconstruction","title":"Description","text":"","category":"section"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"This example describes how to perform a compressed-sensingreconstruction of a CS-2 accelerated acquisition.","category":"page"},{"location":"generated/examples/advanced_reco/#Loading-Package","page":"Compressed-sensing reconstruction","title":"Loading Package","text":"","category":"section"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"using LazyArtifacts # loading data\nusing SEQ_BRUKER_a_MP2RAGE_CS_360\nusing CairoMakie # plotting","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"In addition we load the package internally used to perform the reconstruction","category":"page"},{"location":"generated/examples/advanced_reco/#Loading-Package-2","page":"Compressed-sensing reconstruction","title":"Loading Package","text":"","category":"section"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"using LazyArtifacts # loading data\nusing SEQ_BRUKER_a_MP2RAGE_CS_360\nusing CairoMakie # plotting\n\ndatadir = Main.MP2_artifacts\n@info \"The test data is located at $datadir.\"","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"If you want to perform your own reconstruction, you can change the following line in order to point to another a bruker dataset","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"path_bruker = joinpath(datadir, \"MP2RAGE_CS2\")","category":"page"},{"location":"generated/examples/advanced_reco/#Compressed-sensing-reconstruction","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"","category":"section"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"In order to use an advanced reconstruction we will pass some parameters that will be used by the reconstruction package MRIReco.jl","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"using SEQ_BRUKER_a_MP2RAGE_CS_360.MRIReco\nusing SEQ_BRUKER_a_MP2RAGE_CS_360.MRIReco.RegularizedLeastSquares","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"We have to create a parameter dictionnary that will be used. If you need more information about it take a look at MRIReco.jl","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"CS = Dict{Symbol,Any}()\nCS[:sparseTrafo] = \"Wavelet\" #sparse trafo\nCS[:reg] = L1Regularization(100.)       # regularization\nCS[:solver] = FISTA    # solver\nCS[:iterations] = 30\n\nd = reconstruction_MP2RAGE(path_bruker; mean_NR=true,paramsCS = CS)","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"for comparison purpose let's perform the undersampled reconstruction (without the paramCS keyword)","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"d_under = reconstruction_MP2RAGE(path_bruker; mean_NR=true)","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"We can check the results","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"begin\n  f = Figure(size=(500,400))\n  ax=Axis(f[1,1],title=\"TI₁ undersampled\")\n  h=heatmap!(ax,abs.(d_under[\"im_reco\"][:,:,60,1,1,1]),colormap=:grays)\n\n  ax=Axis(f[1,2],title=\"TI₁ CS\")\n  h=heatmap!(ax,abs.(d[\"im_reco\"][:,:,60,1,1,1]),colormap=:grays)\n\n\n  ax=Axis(f[2,1],title=\"UNIT1 undersampled\")\n  h=heatmap!(ax,d_under[\"T1map\"][:,:,60,1,1],colorrange = (500,2000))\n\n  ax=Axis(f[2,2],title=\"UNIT1 CS\")\n  h=heatmap!(ax,d[\"T1map\"][:,:,60,1,1],colorrange = (500,2000))\n\n  for ax in f.content   # hide decoration befor adding colorbar\n    hidedecorations!(ax)\n  end\n\n  Colorbar(f[2,3],h,label = \"T₁ [ms]\", flip_vertical_label=true)\n  f\nend","category":"page"},{"location":"generated/examples/advanced_reco/#Write-results-in-BIDS-format","page":"Compressed-sensing reconstruction","title":"Write results in BIDS format","text":"","category":"section"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"Results can be written following most of the qBIDS format recommandation","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"subject_name = \"sub_01_cs\"\ndir_path = \"\" # directory path where the files will be create\nwrite_bids_MP2RAGE(d,subject_name,dir_path)","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"","category":"page"},{"location":"generated/examples/advanced_reco/","page":"Compressed-sensing reconstruction","title":"Compressed-sensing reconstruction","text":"This page was generated using Literate.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = SEQ_BRUKER_a_MP2RAGE_CS_360","category":"page"},{"location":"#SEQ_BRUKER_a_MP2RAGE_CS_360","page":"Home","title":"SEQ_BRUKER_a_MP2RAGE_CS_360","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for SEQBRUKERaMP2RAGECS_360.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SEQ_BRUKER_a_MP2RAGE_CS_360]","category":"page"},{"location":"#SEQ_BRUKER_a_MP2RAGE_CS_360.RawAcquisitionData_MP2RAGE-Tuple{MRIFiles.BrukerFile}","page":"Home","title":"SEQ_BRUKER_a_MP2RAGE_CS_360.RawAcquisitionData_MP2RAGE","text":"RawAcquisitionData_MP2RAGE(b::BrukerFile)\n\nConvert a Bruker dataset acquired with the aMP2RAGECS_360 sequence into a  RawAcquisitionData object compatible with the MRIReco functions.\n\nInput :      - b::BrukerFile\n\nOutput :     - raw::RawAcquisitionData\n\n\n\n\n\n","category":"method"},{"location":"#SEQ_BRUKER_a_MP2RAGE_CS_360.write_bids_MP2RAGE","page":"Home","title":"SEQ_BRUKER_a_MP2RAGE_CS_360.write_bids_MP2RAGE","text":"  write_bids_MP2RAGE(d::Dict,subname::AbstractString,folder=\"\")\n\nThis function writes data from a dictionary (d) in BIDS (Brain Imaging Data Structure) format for MP2RAGE acquisitions.\n\nArguments:\n\nd (Dict): A dictionary containing the data to be written. Expected keys:\nim_reco (Array): 5D array containing the reconstructed images.\nMP2RAGE (Array): T1 map image.\nT1maps (Array): Additional T1 map data (optional).\nparams_prot (Dict): Dictionary containing acquisition parameters.\nparams_MP2RAGE (Dict): Dictionary containing MP2RAGE specific parameters.\nsubname (AbstractString): The name of the subject.\nfolder (AbstractString, optional): The folder where the BIDS data will be written. Defaults to the current directory.\n\nFunctionality:\n\nCreates a directory structure for the anatomical data under folder/subname/anat.\nDefines a list of file paths for different image types associated with MP2RAGE acquisitions.\nExtracts relevant data from the dictionary d for each image type.\nCreates NIfTI volumes (NIVolume) with the extracted data and specified voxel size from d[\"params_prot\"].\nWrites each NIfTI volume to a compressed file (.nii.gz) in the corresponding directory.\nExtracts acquisition parameters from d.\nCreates a dictionary (JSON_dict) containing these parameters in BIDS format:\nInversionTime: List of inversion times (TI1, TI2) in seconds.\nRepetitionTimeExcitation: Repetition time (TR) in seconds.\nRepetitionTimePreparation: MP2RAGE specific repetition time (MP2RAGE_TR) in seconds.\nNumberShots: Echo train length (ETL).\nFlipAngle: List of flip angles (alpha1, alpha2) in degrees.\nMagneticFieldStrength: Magnetic field strength in Tesla.\nUnits: Units for the data (set to \"arbitrary\" in this case).\nWrites the JSON dictionary to a file named MP2RAGE.json in the folder/subname directory.\n\nNote: This function assumes the dictionary d contains the necessary data in the specified format. \n\n\n\n\n\n","category":"function"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"EditURL = \"../../../lit/examples/simple_reco.jl\"","category":"page"},{"location":"generated/examples/simple_reco/#01-simple_reconstruction","page":"Simple reconstruction","title":"Simple reconstruction","text":"","category":"section"},{"location":"generated/examples/simple_reco/#Description","page":"Simple reconstruction","title":"Description","text":"","category":"section"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"This example describes how to perform a reconstruction of a fully acquisition acquired with the aMP2RAGECS_360 sequence.","category":"page"},{"location":"generated/examples/simple_reco/#Loading-Package","page":"Simple reconstruction","title":"Loading Package","text":"","category":"section"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"using LazyArtifacts # loading data\nusing SEQ_BRUKER_a_MP2RAGE_CS_360\nusing CairoMakie # plotting","category":"page"},{"location":"generated/examples/simple_reco/#Download-the-datasets","page":"Simple reconstruction","title":"Download the datasets","text":"","category":"section"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"datadir = Main.MP2_artifacts\n@info \"The test data is located at $datadir.\"","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"If you want to perform your own reconstruction, you can change the following line in order to point to another a bruker dataset","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"path_bruker = joinpath(datadir, \"MP2RAGE_FULLY\")","category":"page"},{"location":"generated/examples/simple_reco/#Perform-the-reconstruction","page":"Simple reconstruction","title":"Perform the reconstruction","text":"","category":"section"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"this function will perform a standard reconstruction without compressed-sensing. If your data are subsampled, results will be undersampled reconstruction.","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"the keyword mean_NR=true will average the image before performing the MP2RAGE/T1 maps estimation. Otherwise an image/T₁ map will be generated for each Number Of Repetition (NR)","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"d = reconstruction_MP2RAGE(path_bruker; mean_NR=true)","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"the result is a dictionnary with the following fields :","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"\"im_reco\" : (x,y,z,Number of Repetition,TI) Complex\n\"MP2RAGE\" : (x,y,z,TI) Float\n\"T1map\" : (x,y,z,Number of Repetition) Float\n\"params_prot\"\n\"params_reco\"\n\"params_MP2RAGE\"","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"im_reco corresponds to the TI₁ and \\TI₂ images in the complex format with 6 dimensions : (x,y,z,Number of Repetition,TI)","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"We can check the results","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"begin\n  f = Figure(size=(500,400))\n  ax=Axis(f[1,1],title=\"TI₁\")\n  h=heatmap!(ax,abs.(d[\"im_reco\"][:,:,60,1,1,1]),colormap=:grays)\n\n  ax=Axis(f[1,2],title=\"TI₂\")\n  h=heatmap!(ax,abs.(d[\"im_reco\"][:,:,60,1,1,2]),colormap=:grays)\n\n  ax=Axis(f[2,1],title=\"UNIT1 / MP2RAGE\")\n  h=heatmap!(ax,d[\"MP2RAGE\"][:,:,60,1,1],colormap=:grays)\n\n  ax=Axis(f[2,2],title=\"UNIT1 / MP2RAGE\")\n  h=heatmap!(ax,d[\"T1map\"][:,:,60,1,1],colorrange = (500,2000))\n\n  for ax in f.content   # hide decoration befor adding colorbar\n    hidedecorations!(ax)\n  end\n\n  Colorbar(f[2,3],h,label = \"T₁ [ms]\", flip_vertical_label=true)\n  f\nend","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"The Lookup table used for the reconstruction is stored in the dictionnary (LUT) First columns is the range of T1.","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"f=Figure()\nax = Axis(f[1,1],xlabel=\"T₁ [ms]\")\nlines!(ax,d[\"LUT\"])\nf","category":"page"},{"location":"generated/examples/simple_reco/#Write-results-in-BIDS-format","page":"Simple reconstruction","title":"Write results in BIDS format","text":"","category":"section"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"Results can be written following most of the qBIDS format recommandation","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"subject_name = \"sub_01\"\ndir_path = \"\" # directory path where the files will be create\nwrite_bids_MP2RAGE(d,subject_name,dir_path)","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"which results in :","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"sub_01/\n├─ MP2RAGE.json\n└─ anat/\n   ├─ sub_01_T1map.nii.gz\n   ├─ sub_01_UNIT1.nii.gz\n   ├─ sub_01_inv-1-complex_MP2RAGE.nii.gz\n   ├─ sub_01_inv-1-mag_MP2RAGE.nii.gz\n   ├─ sub_01_inv-1-phase_MP2RAGE.nii.gz\n   ├─ sub_01_inv-2-complex_MP2RAGE.nii.gz\n   ├─ sub_01_inv-2-mag_MP2RAGE.nii.gz\n   └─ sub_01_inv-2-phase_MP2RAGE.nii.gz","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"If you want to generate the T1 map with another tools like qMRLab the required MP2RAGE parameters are stored in the MP2RAGE.json file.","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"","category":"page"},{"location":"generated/examples/simple_reco/","page":"Simple reconstruction","title":"Simple reconstruction","text":"This page was generated using Literate.jl.","category":"page"}]
}
