# Crypto CTF Challenges

A collection of cryptography challenges for CTF practice. This web application provides various cryptography challenges including Base64, XOR, RSA, Caesar Cipher, Vigenère Cipher, AES-CTR, and Binary challenges.

## Setup

1. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Application

1. Start the Flask server:
```bash
python app.py
```

2. Open your browser and navigate to `http://localhost:5000`

## Available Challenges

1. Base64 Challenge
   - Decode a base64 encoded string to get the flag

2. XOR Challenge
   - Decrypt a message that has been XORed with a key

3. RSA Challenge
   - Decrypt an RSA encrypted message with given parameters

4. Caesar Cipher
   - Decrypt a message encrypted with a Caesar cipher

5. Vigenère Cipher
   - Decrypt a message encrypted with the Vigenère cipher

6. AES-CTR
   - Decrypt a message encrypted with AES in CTR mode

7. Binary Challenge
   - Convert binary data to ASCII to get the flag

## Flag Format

All flags follow the format: `CTF{...}`

## Security Note

This is a practice CTF environment. The challenges are designed for learning purposes and use simplified implementations. Do not use these implementations in production environments.
