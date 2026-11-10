import React, { useState } from "react";

import { loginStyles } from "../assets/dummyStyle";

import { Link, useNavigate } from "react-router-dom";

import { ArrowLeft, LogIn, Mail, Lock, Eye, EyeOff } from "lucide-react";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Login = ({ onLoginSuccess = null }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const API_Base = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

  // Email and Password Validation
  const validate = () => {
    const e = {};

    if (!email) {
      e.email = "Email is required";
    } else if (!isValidEmail(email)) {
      e.email = "Please enter a valid email";
    }

    if (!password) {
      e.password = "Password is required";
    }

    return e;
  };

  // Handle Login
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
        email: email.trim().toLowerCase(),
        password,
      };

      const resp = await fetch(`${API_Base}/api/auth/login`, {
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
        const msg = data?.message || "Login Failed";
        setSubmitError(msg);
        return;
      }

      // Save authentication information
      if (data?.token) {
        try {
          localStorage.setItem("token", data.token);

          localStorage.setItem(
            "user",
            JSON.stringify(
              data.user || {
                email: payload.email,
              },
            ),
          );
        } catch (err) {
          // Ignore localStorage errors
        }
      }

      const user = data?.user || {
        email: payload.email,
      };

      // Notify other components that authentication changed
      window.dispatchEvent(
        new CustomEvent("authChanged", {
          detail: {
            user,
          },
        }),
      );

      // Call parent callback if provided
      if (typeof onLoginSuccess === "function") {
        onLoginSuccess(user);
      }

      // Go to Home page after successful login
      navigate("/", {
        replace: true,
      });
    } catch (err) {
      console.error("Login error:", err);
      setSubmitError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={loginStyles.pageContainer}>
      {/* Background decorations */}
      <div className={loginStyles.bubble1}></div>
      <div className={loginStyles.bubble2}></div>

      {/* Back button */}
      <Link to="/" className={loginStyles.backButton}>
        <ArrowLeft className={loginStyles.backButtonIcon} />
        <span className={loginStyles.backButtonText}>Home</span>
      </Link>

      {/* Login Form */}
      <div className={loginStyles.formContainer}>
        <form onSubmit={handleSubmit} className={loginStyles.form} noValidate>
          <div className={loginStyles.formWrapper}>
            <div className={loginStyles.animatedBorder}>
              <div className={loginStyles.formContent}>
                {/* Heading */}
                <h2 className={loginStyles.heading}>
                  <span className={loginStyles.headingIcon}>
                    <LogIn className={loginStyles.headingIconInner} />
                  </span>

                  <span className={loginStyles.headingText}>Login</span>
                </h2>

                {/* Subtitle */}
                <p className={loginStyles.subtitle}>
                  Sign in to continue to Code Play
                </p>

                {/* Email */}
                <label className={loginStyles.label}>
                  <span className={loginStyles.labelText}>Email</span>

                  <div className={loginStyles.inputContainer}>
                    <span className={loginStyles.inputIcon}>
                      <Mail className={loginStyles.inputIconInner} />
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
                      className={`${loginStyles.input} ${
                        errors.email
                          ? loginStyles.inputError
                          : loginStyles.inputNormal
                      }`}
                      placeholder="your@example.com"
                      required
                    />
                  </div>

                  {errors.email && (
                    <p className={loginStyles.errorText}>{errors.email}</p>
                  )}
                </label>

                {/* Password */}
                <label className={loginStyles.label}>
                  <span className={loginStyles.labelText}>Password</span>

                  <div className={loginStyles.inputContainer}>
                    <span className={loginStyles.inputIcon}>
                      <Lock className={loginStyles.inputIconInner} />
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
                      className={`${loginStyles.input} ${
                        loginStyles.passwordInput
                      } ${
                        errors.password
                          ? loginStyles.inputError
                          : loginStyles.inputNormal
                      }`}
                      placeholder="Enter your password"
                      required
                    />

                    {/* Toggle Password */}
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className={loginStyles.passwordToggle}
                    >
                      {showPassword ? (
                        <EyeOff className={loginStyles.passwordToggleIcon} />
                      ) : (
                        <Eye className={loginStyles.passwordToggleIcon} />
                      )}
                    </button>
                  </div>

                  {errors.password && (
                    <p className={loginStyles.errorText}>{errors.password}</p>
                  )}
                </label>

                {/* Submit Error */}
                {submitError && (
                  <p className={loginStyles.submitError}>{submitError}</p>
                )}

                {/* Submit Button */}
                <div className={loginStyles.buttonsContainer}>
                  <button
                    type="submit"
                    className={loginStyles.submitButton}
                    disabled={loading}
                  >
                    {loading ? (
                      "Signing in...."
                    ) : (
                      <>
                        <LogIn className={loginStyles.submitButtonIcon} />

                        <span className={loginStyles.submitButtonText}>
                          Sign in
                        </span>
                      </>
                    )}
                  </button>

                  {/* Create Account */}
                  <div className={loginStyles.signupContainer}>
                    <div className={loginStyles.signupContent}>
                      <span className={loginStyles.signupText}>
                        Account nahi hai toh --go
                      </span>

                      <Link to="/signup" className={loginStyles.signupLink}>
                        Create Account
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Login Animations */}
      <style>{loginStyles.animations}</style>
    </div>
  );
};

export default Login;
