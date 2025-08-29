# BFHL API – VIT Full Stack Question

This project is a REST API built for the **VIT Full Stack Assessment**.  
The API accepts an array of inputs and returns data along with additional details.

---

## API Endpoint

After deployment on Vercel, the API will be accessible at: https://bfhl-api-22bce10497.vercel.app/


## Request Format

**Method:** `POST`  
**Route:** `/api/bfhl`  
**Content-Type:** `application/json`

### Example Request:
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## Request Format
```json
{
  "is_success": true,
  "user_id": "akansha_panda_05082004",
  "email": "akansha.panda2025@vitstudent.ac.in",
  "roll_number": "22BCE1234",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
