var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = SEQ_BRUKER_a_MP2RAGE_CS_360","category":"page"},{"location":"#SEQ*BRUKER*a*MP2RAGE*CS_360","page":"Home","title":"SEQBRUKERaMP2RAGECS_360","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for SEQBRUKERaMP2RAGECS_360.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SEQ_BRUKER_a_MP2RAGE_CS_360]","category":"page"},{"location":"#SEQ_BRUKER_a_MP2RAGE_CS_360.RawAcquisitionData_MP2RAGE-Tuple{MRIFiles.BrukerFile}","page":"Home","title":"SEQ_BRUKER_a_MP2RAGE_CS_360.RawAcquisitionData_MP2RAGE","text":"RawAcquisitionData_MP2RAGE(b::BrukerFile)\n\nConvert a Bruker dataset acquired with the aMP2RAGECS_360 sequence into a  RawAcquisitionData object compatible with the MRIReco functions.\n\nInput :      - b::BrukerFile\n\nOutput :     - raw::RawAcquisitionData\n\n\n\n\n\n","category":"method"},{"location":"#SEQ_BRUKER_a_MP2RAGE_CS_360.write_bids_MP2RAGE","page":"Home","title":"SEQ_BRUKER_a_MP2RAGE_CS_360.write_bids_MP2RAGE","text":"  write_bids_MP2RAGE(d::Dict,subname::AbstractString,folder=\"\")\n\nThis function writes data from a dictionary (d) in BIDS (Brain Imaging Data Structure) format for MP2RAGE acquisitions.\n\nArguments:\n\nd (Dict): A dictionary containing the data to be written. Expected keys:\nim_reco (Array): 5D array containing the reconstructed images.\nMP2RAGE (Array): T1 map image.\nT1maps (Array): Additional T1 map data (optional).\nparams_prot (Dict): Dictionary containing acquisition parameters.\nparams_MP2RAGE (Dict): Dictionary containing MP2RAGE specific parameters.\nsubname (AbstractString): The name of the subject.\nfolder (AbstractString, optional): The folder where the BIDS data will be written. Defaults to the current directory.\n\nFunctionality:\n\nCreates a directory structure for the anatomical data under folder/subname/anat.\nDefines a list of file paths for different image types associated with MP2RAGE acquisitions.\nExtracts relevant data from the dictionary d for each image type.\nCreates NIfTI volumes (NIVolume) with the extracted data and specified voxel size from d[\"params_prot\"].\nWrites each NIfTI volume to a compressed file (.nii.gz) in the corresponding directory.\nExtracts acquisition parameters from d.\nCreates a dictionary (JSON_dict) containing these parameters in BIDS format:\nInversionTime: List of inversion times (TI1, TI2) in seconds.\nRepetitionTimeExcitation: Repetition time (TR) in seconds.\nRepetitionTimePreparation: MP2RAGE specific repetition time (MP2RAGE_TR) in seconds.\nNumberShots: Echo train length (ETL).\nFlipAngle: List of flip angles (alpha1, alpha2) in degrees.\nMagneticFieldStrength: Magnetic field strength in Tesla.\nUnits: Units for the data (set to \"arbitrary\" in this case).\nWrites the JSON dictionary to a file named MP2RAGE.json in the folder/subname directory.\n\nNote: This function assumes the dictionary d contains the necessary data in the specified format. \n\n\n\n\n\n","category":"function"}]
}
