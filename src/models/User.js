
const saltRounds = 10

const userSchema = mongoose.schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: Str
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb) {


    // plainPassword 1234567     암호화된 비밀번호
    bcrypt.compare(plainPassword, )
}