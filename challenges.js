const challenges = {
    'base64': {
        title: 'Base64 Challenge',
        description: 'Decode this base64 string to get the flag!',
        difficulty: 'easy',
        challenge: 'Q1RGe2Jhc2U2NF9pc19mdW59',
        flagHash: '3d26942aecb2ac75374d4bcc88d1cdb332d67eb36c25fb2d0aaf4503bbc9f2e9' // Example hash
    },
    'binary': {
        title: 'Binary Challenge',
        description: 'Convert this binary data to ASCII to get the flag',
        difficulty: 'easy',
        challenge: '01000011 01010100 01000110 01111011 01100010 01101001 01101110 01100001 01110010 01111001 01011111 01100100 01100001 01110100 01100001 01111101',
        flagHash: '38164d75b4cdb4f044ff6c8041fb1e8e8058355c9285d5ba23b669880639e97d' // Example hash
    },
    'xor': {
        title: 'XOR Challenge',
        description: 'The flag has been XORed with the 4 char key. Can you recover it?',
        difficulty: 'easy',
        challenge: "050108353e3a3c112f26112d293a2233",
        flagHash: '2a39a646bc41f0b83e2ed924f93f255418b8c7f1b2d1b975c6b67394d0ce6efc' // Example hash
    },
    'rsa': {
        title: 'RSA Challenge',
        description: 'Decrypt this RSA message. n=49476868418498080844536154073530067521391137858176235089564516966489053504443,\n e=65537',
        difficulty: 'medium',
        challenge: '32033054674591628030728364804784409449039714975917777800447616441057320211987', // This is a placeholder, you'll need to implement actual RSA encryption
        flagHash: 'f4adb77a80e1a0331556489aca33f574398596e996e2b15ee3226c119d214cb5' // Example hash
    },
    'caesar': {
        title: 'Caesar Cipher',
        description: 'The flag has been shifted by 13 positions. Can you shift it back?',
        difficulty: 'easy',
        challenge: 'WNZ{wuymul_mbczn}',
        flagHash: '83be7852029fd139fc4e859ae4d1f5dba5f2ee0cab92ec85ba2dd20de242eefc' // Example hash
    },
    'vigenere': {
        title: 'Vigenère Cipher',
        description: 'Decrypt this Vigenère cipher',
        difficulty: 'medium',
        challenge: 'MXD{fmeorcbi_astfov}', // This is a placeholder, you'll need to implement actual Vigenère encryption
        flagHash: '34c1abb2318e79fffaea4b6e955777070e59cd93e17172549b26509700a9431e' // Example hash
    },
    'aes_ctr': {
        title: 'AES-CTR Challenge',
        description: 'Decrypt this AES-CTR encrypted message, and key in hex: "1482e8f360d4aa2f91e01b1141cffdb4" and nonce_hex is "7a693f3db9a6cb7c" ',
        difficulty: 'medium',
        challenge: '83ffe26083879ff7b28946e054bdb8d6182fbdcf1c7bdc1a59c8e4886cefdfc3be8b35', // This is a placeholder, you'll need to implement actual AES-CTR encryption
        flagHash: '66f3197b77a11074cacd9b11e5d00e891f31f4accad68bc95e1602886ac1cb3b' // Example hash
    },
    'zip_hash': {
        title: 'ZIP Hash Cracking',
        description: 'Download the ZIP file and crack its password. The flag is inside!',
        difficulty: 'medium',
        challenge: 'Download the ZIP file and use tools like John the Ripper or hashcat to crack the password.',
        flagHash: '0735c28f98450657c4fa96b1495ce0b33139576f7305d356d5094fdf7b8e3afb',
        downloadFile: 'challenges/secret.zip',
        fileType: 'zip'
    },
    'pdf_stego': {
        title: 'PDF Steganography',
        description: 'Download the PDF file and find the hidden message inside.',
        difficulty: 'hard',
        challenge: 'The PDF contains a hidden message. Use steganography tools to extract it.',
        flagHash: '5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5',
        downloadFile: 'challenges/encrypted_pdf.pdf',
        fileType: 'pdf'
    },
    'kali_root': {
        title: 'Kali Root Password',
        description: 'The root password hash is: $y$salt$hash. Can you crack it? Flag is CTF{<PASSWORD>}',
        difficulty: 'hard',
        challenge: '$y$j9T$16eXZN9LlQDU7EL4/yGNU.$kv6f2j.davbG8NtiBtjuBagqavIsrvOjftbV93mWyQ4',
        flagHash: 'b05b9b3f6e1e9a137ae1fd77a7f776622d7a6f3c3a436625a64caa5eb5fcbf49'
    }
}; 