import React, { useState } from "react";

import { signupStyles } from "../assets/dummyStyle";

import { Link, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  CheckCircle,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Signup = ({ onSignupSuccess = null }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  // API Base URL
  const API_Base = "http://localhost:4000";

  // Email, name and password validation
  const validate = () => {
    const e = {};

    if (!name.trim()) {
      e.name = "Name is required";
    }

    if (!email) {
      e.email = "Email is required";
    } else if (!isValidEmail(email)) {
      e.email = "Please enter a valid email";
    }

    if (!password) {
      e.password = "Password is required";
    } else if (password.length < 6) {
      e.password = "Password must be at least 6 characters";
    }

    return e;
  };

  // Handle Signup
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setSubmitError("");

    const validation = validate();

    setErrors(validation);

    if (Object.keys(validation).length) {
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      };

      const resp = await fetch(`${API_Base}/api/auth/register`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      let data = null;

      try {
        data = await resp.json();
      } catch (error) {
        // Ignore JSON parsing errors
      }

      if (!resp.ok) {
        const msg = data?.message || "Registration Failed";

        setSubmitError(msg);

        return;
      }

      // Save authentication information if token is returned
      if (data?.token) {
        try {
          localStorage.setItem("token", data.token);

          localStorage.setItem(
            "user",
            JSON.stringify(
              data.user || {
                name: name.trim(),
                email: email.trim().toLowerCase(),
              },
            ),
          );
        } catch (err) {
          // Ignore localStorage errors
        }
      }

      // Signup success callback
      if (typeof onSignupSuccess === "function") {
        try {
          onSignupSuccess(
            data.user || {
              name: name.trim(),
              email: email.trim().toLowerCase(),
            },
          );
        } catch (err) {
          // Ignore callback errors
        }
      }

      // Go to Login page after successful signup
      navigate("/login", {
        replace: true,
      });
    } catch (err) {
      console.error("Signup error:", err);

      setSubmitError("Network Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={signupStyles.pageContainer}>
      {/* Background decorations */}
      <div className={signupStyles.bubble1}></div>
      <div className={signupStyles.bubble2}></div>

      {/* Back button */}
      <Link to="/login" className={signupStyles.backButton}>
        <ArrowLeft className={signupStyles.backButtonIcon} />

        <span className={signupStyles.backButtonText}>Back</span>
      </Link>

      {/* Signup Form */}
      <div className={signupStyles.formContainer}>
        <form onSubmit={handleSubmit} className={signupStyles.form} noValidate>
          <div className={signupStyles.formWrapper}>
            <div className={signupStyles.animatedBorder}>
              <div className={signupStyles.formContent}>
                {/* Heading */}
                <h2 className={signupStyles.heading}>
                  <span className={signupStyles.headingIcon}>
                    <CheckCircle className={signupStyles.headingIconInner} />
                  </span>

                  <span className={signupStyles.headingText}>
                    Create Account
                  </span>
                </h2>

                {/* Subtitle */}
                <p className={signupStyles.subtitle}>
                  "Bas ek chota sa sign up, aur Code Play me entry fix! Smooth
                  UI, no khich-khich."
                </p>

                {/* Name */}
                <label className={signupStyles.label}>
                  <span className={signupStyles.labelText}>Full Name</span>

                  <div className={signupStyles.inputContainer}>
                    <span className={signupStyles.inputIcon}>
                      <User className={signupStyles.inputIconInner} />
                    </span>

                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);

                        if (errors.name) {
                          setErrors((s) => ({
                            ...s,
                            name: undefined,
                          }));
                        }
                      }}
                      className={`${signupStyles.input} ${
                        errors.name
                          ? signupStyles.inputError
                          : signupStyles.inputNormal
                      }`}
                      placeholder="Name+Surname"
                      required
                    />
                  </div>

                  {errors.name && (
                    <p className={signupStyles.errorText}>{errors.name}</p>
                  )}
                </label>

                {/* Email */}
                <label className={signupStyles.label}>
                  <span className={signupStyles.labelText}>Email</span>

                  <div className={signupStyles.inputContainer}>
                    <span className={signupStyles.inputIcon}>
                      <Mail className={signupStyles.inputIconInner} />
                    </span>

                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);

                        if (errors.email) {
                          setErrors((s) => ({
                            ...s,
                            email: undefined,
                          }));
                        }
                      }}
                      className={`${signupStyles.input} ${
                        errors.email
                          ? signupStyles.inputError
                          : signupStyles.inputNormal
                      }`}
                      placeholder="Email dalo bhai"
                      required
                    />
                  </div>

                  {errors.email && (
                    <p className={signupStyles.errorText}>{errors.email}</p>
                  )}
                </label>

                {/* Password */}
                <label className={signupStyles.label}>
                  <span className={signupStyles.labelText}>Password</span>

                  <div className={signupStyles.inputContainer}>
                    <span className={signupStyles.inputIcon}>
                      <Lock className={signupStyles.inputIconInner} />
                    </span>

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);

                        if (errors.password) {
                          setErrors((s) => ({
                            ...s,
                            password: undefined,
                          }));
                        }
                      }}
                      className={`${signupStyles.input} ${
                        signupStyles.passwordInput
                      } ${
                        errors.password
                          ? signupStyles.inputError
                          : signupStyles.inputNormal
                      }`}
                      placeholder="Zamana Kharab Hai Password dalo"
                      required
                    />

                    {/* Toggle Password */}
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className={signupStyles.passwordToggle}
                    >
                      {showPassword ? (
                        <EyeOff className={signupStyles.passwordToggleIcon} />
                      ) : (
                        <Eye className={signupStyles.passwordToggleIcon} />
                      )}
                    </button>
                  </div>

                  {errors.password && (
                    <p className={signupStyles.errorText}>{errors.password}</p>
                  )}
                </label>

                {/* Submit Error */}
                {submitError && (
                  <p className={signupStyles.submitError} role="alert">
                    {submitError}
                  </p>
                )}

                {/* Submit Button */}
                <div className={signupStyles.buttonsContainer}>
                  <button
                    type="submit"
                    disabled={loading}
                    className={signupStyles.submitButton}
                  >
                    {loading ? "Creating account....." : "Create Account"}
                  </button>
                </div>

                {/* Login Prompt */}
                <div className={signupStyles.loginPromptContainer}>
                  <div className={signupStyles.loginPromptContent}>
                    <span className={signupStyles.loginPromptText}>
                      Already have an Account?
                    </span>

                    <Link to="/login" className={signupStyles.loginPromptLink}>
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Signup Animations */}
      <style>{signupStyles.animations}</style>
    </div>
  );
};

export default Signup;
